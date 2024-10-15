import React, { useState, forwardRef, useEffect, useRef } from 'react';
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
  SelectDropdown,
  DropdownItem,
  DealName,
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
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림 상태
  const dropdownRef = useRef<HTMLDivElement>(null); // 드롭다운 감지를 위한 ref

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

  // 검색어로 필터링된 프로젝트 목록
  const filteredProjects = projects.filter((project) =>
    project.pjt_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredProjects);

  const handleProjectSelect = (projectId: number) => {
    const project = projects.find((p) => p.pjt_id === projectId);
    console.log(project);
    if (project) {
      setSelectedProjectId(project.pjt_id);
      setSearchTerm(project.pjt_name); // 선택된 프로젝트 이름을 인풋 필드에 표시
      setSelectedProjectName(project.pjt_name);
      setIsDropdownOpen(false); // 선택 후 드롭다운 닫기
    }
  };

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
      console.log(selectedProjectName);
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

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          <DealName
            type="text"
            placeholder="Search or Select Deal Name"
            value={searchTerm}
            onClick={() => setIsDropdownOpen(true)} // 클릭하면 드롭다운 열림
            onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
          />

          {/* 드롭다운: 사용자가 검색어에 따라 필터된 결과를 보게 함 */}
          {isDropdownOpen && (
            <SelectDropdown ref={dropdownRef}>
              {filteredProjects.map((project) => (
                <DropdownItem key={project.pjt_id} onClick={() => handleProjectSelect(project.pjt_id)}>
                  {project.pjt_name}
                </DropdownItem>
              ))}
            </SelectDropdown>
          )}
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
