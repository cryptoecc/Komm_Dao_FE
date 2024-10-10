import React, { useState, forwardRef, useEffect } from 'react';
import {
  Container,
  Title,
  ImageContainer,
  ProfileImage,
  BannerImage,
  Form,
  Input,
  Select,
  DateWrapper,
  DateInput,
  Date,
  TextArea,
  SumArea,
  ButtonContainer,
  CancelButton,
  CreateButton,
  EditIconContainer,
  EditIconBackground,
  EditIconForeground,
  TeamGroup,
  TeamCategory,
  DateInputWrapper,
  CalendarIcon,
  HiddenFileInput,
  PreviewImage,
  RoundSelect,
} from './AddDeal.style';
import DatePicker from 'react-datepicker';
import calenderIcon from 'src/assets/admin/calendar_month.svg';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store'; // Redux 스토어의 RootState 타입을 가져옵니다.
import { API_BASE_URL } from 'src/utils/utils';

interface Project {
  pjt_id: number;
  pjt_name: string;
  // 다른 필요한 속성들도 여기에 추가할 수 있습니다.
}

interface AddDealProps {
  onCancel: () => void; // 모달을 닫기 위한 prop
  onDealCreated: () => void;
}

const CustomDateInput = forwardRef(({ value, onClick, placeholder }: any, ref: any) => (
  <DateInputWrapper onClick={onClick} ref={ref}>
    <DateInput value={value} placeholder={placeholder} readOnly />
    <CalendarIcon src={calenderIcon} alt="calendar" />
  </DateInputWrapper>
));

const AddDeal: React.FC<AddDealProps> = ({ onCancel, onDealCreated }) => {
  const [dealRound, setDealRound] = useState('');
  const [minAlloc, setMinAlloc] = useState('');
  const [maxAlloc, setMaxAlloc] = useState('');
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dealSummary, setDealSummary] = useState('');
  const [dealDesc, setDealDesc] = useState('');

  const [projects, setProjects] = useState<Project[]>([]); // 프로젝트 리스트 상태
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null); // 선택된 프로젝트 ID
  const [selectedProjectName, setSelectedProjectName] = useState<string>(''); // 선택된 프로젝트 이름

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);

  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);
  const [bannerImagePreview, setBannerImagePreview] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  useEffect(() => {
    // 백엔드에서 프로젝트 정보를 가져오기
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/applied-project`);
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      setProfileImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBannerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBannerImage(e.target.files[0]);
      setBannerImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const userId = useSelector((state: RootState) => state.user.user_id); // 전역 상태에서 user_id를 가져옵니다.

  const handleCreate = async () => {
    try {
      const formData = new FormData();

      // 이미지 파일이 있는 경우에만 추가
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      if (bannerImage) {
        formData.append('bannerImage', bannerImage);
      }

      // 나머지 텍스트 데이터
      formData.append('pjt_id', String(selectedProjectId));
      formData.append('pjt_name', selectedProjectName);
      formData.append('deal_round', dealRound);
      formData.append('end_date', endDate ? endDate.toISOString() : '');
      formData.append('min_interest', minAlloc);
      formData.append('max_interest', maxAlloc);
      formData.append('deal_summary', dealSummary);
      formData.append('deal_desc', dealDesc);

      // axios를 사용하여 데이터 전송
      const response = await axios.post(`${API_BASE_URL}/api/admin/create-deal`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Deal created successfully', response.data);
      onDealCreated();
      onCancel();
    } catch (error) {
      console.error('Error creating deal', error);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <ProfileImage as="label">
          {profileImagePreview && <PreviewImage src={profileImagePreview} alt="Profile Preview" />}
          <HiddenFileInput type="file" accept="image/*" onChange={handleProfileImageChange} />
          <EditIconContainer>
            <EditIconBackground>
              <EditIconForeground />
            </EditIconBackground>
          </EditIconContainer>
        </ProfileImage>
        <BannerImage as="label">
          {bannerImagePreview && <PreviewImage src={bannerImagePreview} alt="Banner Preview" />}
          <HiddenFileInput type="file" accept="image/*" onChange={handleBannerImageChange} />
          <EditIconContainer>
            <EditIconBackground>
              <EditIconForeground />
            </EditIconBackground>
          </EditIconContainer>
        </BannerImage>
      </ImageContainer>
      <Form>
        <TeamGroup>
          <Select
            value={selectedProjectId || ''}
            onChange={(e) => {
              const project = projects.find((p) => p.pjt_id === Number(e.target.value));
              if (project) {
                setSelectedProjectId(project.pjt_id);
                setSelectedProjectName(project.pjt_name); // 프로젝트 이름 저장
              }
            }}
          >
            <option value="" disabled>
              Deal Name
            </option>
            {projects.map((project) => (
              <option key={project.pjt_id} value={project.pjt_id}>
                {project.pjt_name}
              </option>
            ))}
          </Select>
        </TeamGroup>
        <TeamGroup>
          <RoundSelect value={dealRound} onChange={(e) => setDealRound(e.target.value)}>
            <option value="" disabled>
              Deal Round
            </option>
            <option value="Pre-Seed round">Pre-Seed</option>
            <option value="Seed round">Seed</option>
            <option value="Private round">Private</option>
            <option value="Strategic round">Strategic</option>
            <option value="Series A round">Series A</option>
            <option value="Series B round">Series B</option>
            <option value="Series C round">Series C</option>
          </RoundSelect>
          <Date>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Due Date"
              customInput={<CustomDateInput />}
            />
          </Date>
        </TeamGroup>
        <TeamGroup>
          <Input
            type="number"
            placeholder="Min Alloc."
            value={minAlloc}
            onChange={(e) => setMinAlloc(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Max Alloc."
            value={maxAlloc}
            onChange={(e) => setMaxAlloc(e.target.value)}
          />
        </TeamGroup>

        <SumArea placeholder="Deal Summary" value={dealSummary} onChange={(e) => setDealSummary(e.target.value)} />
        <TextArea placeholder="Deal Description" value={dealDesc} onChange={(e) => setDealDesc(e.target.value)} />
      </Form>
      <ButtonContainer>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <CreateButton onClick={handleCreate}>Create</CreateButton>
      </ButtonContainer>
    </Container>
  );
};

export default AddDeal;
