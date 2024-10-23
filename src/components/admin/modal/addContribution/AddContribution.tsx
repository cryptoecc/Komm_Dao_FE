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
  TextArea,
  AddMembersButton,
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
  Date,
  TelInput,
  TeamInput,
  SelectedMembersContainer,
  MemberName,
  HiddenFileInput,
  PreviewImage,
  SelectXp,
  MissionInputGroup, // 추가된 Mission 관련 스타일
  DeleteMissionButton,
  MissionSelect,
  MissionInput,
  MissionGroup,
  ButtonWrap,
} from './AddContribution.style';
import DatePicker from 'react-datepicker';
import calenderIcon from 'src/assets/admin/calendar_month.svg';
import Modal from '../Modal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store'; // Redux 스토어의 RootState 타입을 가져옵니다.
import { API_BASE_URL } from 'src/utils/utils';

interface Mission {
  missionType: string;
  missionUrl: string;
}

interface Project {
  pjt_id: number;
  pjt_name: string;
  // 다른 필요한 속성들도 여기에 추가할 수 있습니다.
}

interface AddContributionProps {
  onCancel: () => void; // 모달을 닫기 위한 prop
}

const CustomDateInput = forwardRef(({ value, onClick, placeholder }: any, ref: any) => (
  <DateInputWrapper onClick={onClick} ref={ref}>
    <DateInput value={value} placeholder={placeholder} readOnly />
    <CalendarIcon src={calenderIcon} alt="calendar" />
  </DateInputWrapper>
));

const AddContribution: React.FC<AddContributionProps> = ({ onCancel }) => {
  const [teamName, setTeamName] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [contributionCategory, setContributionCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedXp, setSelectedXp] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [description, setDescription] = useState('');
  const [missions, setMissions] = useState<Mission[]>([{ missionType: '', missionUrl: '' }]); // 초기 Mission 상태

  const [projects, setProjects] = useState<Project[]>([]); // 프로젝트 리스트 상태
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null); // 선택된 프로젝트 ID
  const [selectedProjectName, setSelectedProjectName] = useState<string>(''); // 선택된 프로젝트 이름

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);

  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);
  const [bannerImagePreview, setBannerImagePreview] = useState<string | null>(null);

  const [isProjectCreated, setIsProjectCreated] = useState(false); // 프로젝트 생성 상태

  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   //   const [selectedMembers, setSelectedMembers] = useState<Member[]>([]);

  //   const openModal = () => setIsModalOpen(true);
  //   const closeModal = () => setIsModalOpen(false);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/applied-project`);
      setProjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // useEffect에서 프로젝트 데이터를 불러옴
  useEffect(() => {
    fetchProjects();
  }, [isProjectCreated]); // 프로젝트가 생성되었을 때마다 useEffect 재실행
  // 미션 추가 함수
  const addMission = () => {
    setMissions([...missions, { missionType: '', missionUrl: '' }]);
  };

  // 미션 삭제 함수 (가장 마지막 미션 삭제)
  const deleteLastMission = () => {
    if (missions.length > 1) {
      setMissions(missions.slice(0, -1)); // 마지막 미션 제거
    }
  };

  // 미션 필드 값 변경 함수
  const handleMissionChange = (index: number, field: 'missionType' | 'missionUrl', value: string) => {
    const updatedMissions = missions.map((mission, i) => (i === index ? { ...mission, [field]: value } : mission));
    setMissions(updatedMissions);
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
      formData.append('cont_type', selectedType);
      formData.append('cont_category', contributionCategory);
      formData.append('max_participant', maxParticipants);
      formData.append('cont_desc', description);
      formData.append('start_date', startDate ? startDate.toISOString() : '');
      formData.append('end_date', endDate ? endDate.toISOString() : '');
      formData.append('cont_xp', selectedXp);
      formData.append('missions', JSON.stringify(missions)); // 미션 배열을 문자열로 변환해서 전송

      // axios를 사용하여 데이터 전송
      const response = await axios.post(`${API_BASE_URL}/api/admin/create-contribution`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Contribution created successfully', response.data);
      setIsProjectCreated(true); // 프로젝트 생성 상태를 업데이트
      onCancel();
    } catch (error) {
      console.error('Error creating contribution', error);
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
              Cont. Name
            </option>
            {projects.map((project) => (
              <option key={project.pjt_id} value={project.pjt_id}>
                {project.pjt_name}
              </option>
            ))}
          </Select>
          <Input
            type="number"
            placeholder="Max Participants"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
          />
        </TeamGroup>
        <TeamCategory>
          <Select value={contributionCategory} onChange={(e) => setContributionCategory(e.target.value)}>
            <option value="" disabled>
              Cont. Category
            </option>
            <option value="Solo">Solo</option>
            <option value="Kohort">Kohort</option>
          </Select>
          <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="" disabled>
              Cont. Type
            </option>
            <option value="Community Engagement">Community Engagement</option>
            <option value="Node/Validator">Node/Validator</option>
            <option value="Research">Research</option>
            <option value="Marketing">Marketing</option>
            <option value="Invite">Invite</option>
            <option value="Daily-check">Daily-check</option>
          </Select>
        </TeamCategory>
        <DateWrapper>
          <SelectXp value={selectedXp} onChange={(e) => setSelectedXp(e.target.value)}>
            <option value="" disabled>
              Cont. XP
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
          </SelectXp>
          <Date>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Start Date"
              customInput={<CustomDateInput />}
            />
          </Date>
          <Date>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="End Date"
              customInput={<CustomDateInput />}
            />
          </Date>
        </DateWrapper>

        <TextArea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        {/* 미션 필드 */}
        {missions.map((mission, index) => (
          <MissionInputGroup key={index}>
            <h1>Mission {index + 1}</h1>
            <MissionGroup>
              <MissionSelect
                value={mission.missionType}
                onChange={(e) => handleMissionChange(index, 'missionType', e.target.value)}
              >
                <option value="" disabled>
                  Mission Type
                </option>
                <option value="Twitter Follow">Twitter Follow</option>
                <option value="Twitter Retweet">Twitter Retweet</option>
                <option value="Discord Verify">Discord Verify</option>
                <option value="Telegram Join">Telegram Join</option>
                <option value="Invite People">Invite People</option>
                <option value="Daily Check">Daily Check</option>
              </MissionSelect>

              <MissionInput
                type="text"
                placeholder={`Mission ${index + 1} URL`}
                value={mission.missionUrl}
                onChange={(e) => handleMissionChange(index, 'missionUrl', e.target.value)}
              />
            </MissionGroup>
          </MissionInputGroup>
        ))}
        <ButtonWrap>
          {missions.length > 1 && (
            <DeleteMissionButton type="button" onClick={deleteLastMission}>
              - Delete
            </DeleteMissionButton>
          )}
          <AddMembersButton
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // 이벤트 전파 중단
              addMission();
            }}
          >
            Add
          </AddMembersButton>
        </ButtonWrap>
      </Form>
      <ButtonContainer>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <CreateButton onClick={handleCreate}>Create</CreateButton>
      </ButtonContainer>
    </Container>
  );
};

export default AddContribution;
