import React, { useState, useEffect, forwardRef } from 'react';
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
  TextArea,
  SumArea,
  ButtonContainer,
  CancelButton,
  CreateButton,
  EditIconContainer,
  EditIconBackground,
  EditIconForeground,
  TeamGroup,
  DateInputWrapper,
  CalendarIcon,
  HiddenFileInput,
  PreviewImage,
  RoundSelect,
} from './EditDeal.style';
import DatePicker from 'react-datepicker';
import calenderIcon from 'src/assets/admin/calendar_month.svg';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';

interface EditDealProps {
  deal: any; // 기존 deal 데이터
  onCancel: () => void; // 모달을 닫기 위한 함수
  onSave: (updatedDeal: any) => void;
}

interface Project {
  pjt_id: number;
  pjt_name: string;
}

const CustomDateInput = forwardRef(({ value, onClick, placeholder }: any, ref: any) => (
  <DateInputWrapper onClick={onClick} ref={ref}>
    <DateInput value={value} placeholder={placeholder} readOnly />
    <CalendarIcon src={calenderIcon} alt="calendar" />
  </DateInputWrapper>
));

const EditDeal: React.FC<EditDealProps> = ({ deal, onCancel, onSave }) => {
  console.log(deal);
  // 기존 deal 데이터를 state로 설정
  const [dealRound, setDealRound] = useState(deal.deal_round || '');
  const [minAlloc, setMinAlloc] = useState(deal.deal_min_interest || '');
  const [maxAlloc, setMaxAlloc] = useState(deal.deal_max_interest || '');
  const [endDate, setEndDate] = useState<Date | null>(deal.end_date ? new Date(deal.end_date as string) : null);
  const [dealSummary, setDealSummary] = useState(deal.deal_summary || '');
  const [dealDesc, setDealDesc] = useState(deal.deal_desc || '');

  const [projects, setProjects] = useState<Project[]>([]); // 프로젝트 리스트 상태
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(deal.pjt_id || null);
  const [selectedProjectName, setSelectedProjectName] = useState<string>(deal.deal_name || '');

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);

  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    deal.deal_logo_url ? `${API_BASE_URL}/${deal.deal_logo_url}` : null
  );
  const [bannerImagePreview, setBannerImagePreview] = useState<string | null>(
    deal.deal_banner_url ? `${API_BASE_URL}/${deal.deal_banner_url}` : null
  );

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

  const handleSave = async () => {
    try {
      const formData = new FormData();

      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      if (bannerImage) {
        formData.append('bannerImage', bannerImage);
      }
      formData.append('pjt_id', String(selectedProjectId));
      formData.append('pjt_name', selectedProjectName || deal.pjt_name); // 기존 프로젝트 네임 유지
      console.log('Saving Project Name:', selectedProjectName || deal.pjt_name);
      console.log(selectedProjectId);
      formData.append('deal_round', dealRound);
      formData.append('end_date', endDate ? endDate.toISOString() : '');
      formData.append('min_interest', minAlloc);
      formData.append('max_interest', maxAlloc);
      formData.append('deal_summary', dealSummary);
      formData.append('deal_desc', dealDesc);

      // 백엔드에 수정된 데이터 전송
      const response = await axios.put(`${API_BASE_URL}/api/admin/deals/${deal.deal_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);

      onSave(response.data);

      console.log('Deal updated successfully');
      onCancel(); // 모달 닫기
    } catch (error) {
      console.error('Error updating deal', error);
    }
  };

  useEffect(() => {
    if (deal.pjt_id && deal.pjt_name) {
      setSelectedProjectId(deal.pjt_id);
      setSelectedProjectName(deal.pjt_name);
    }
  }, [deal.pjt_id, deal.pjt_name]);

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
              console.log(project);
              if (project) {
                setSelectedProjectId(project.pjt_id);
                setSelectedProjectName(project.pjt_name); // 프로젝트 이름 저장
                console.log('Selected Project Name:', project.pjt_name);
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
          <DateWrapper>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Due Date"
              customInput={<CustomDateInput />}
            />
          </DateWrapper>
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
        <CreateButton onClick={handleSave}>Save</CreateButton>
      </ButtonContainer>
    </Container>
  );
};

export default EditDeal;
