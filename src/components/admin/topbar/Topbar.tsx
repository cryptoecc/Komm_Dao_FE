import React from 'react';
import { TopBarContainer, Search, SearchInput, IconWrapper, Icon, SendMessageButton } from './Topbar.style';
import searchIcon from 'src/assets/admin/search.svg';
import addIcon from 'src/assets/admin/add_circle.svg';
import editIcon from 'src/assets/admin/edituser.svg';
import deleteIcon from 'src/assets/admin/delete.svg';
import saveIcon from 'src/assets/admin/save.svg';
import downloadIcon from 'src/assets/admin/download.svg';
import sendMessageIcon from 'src/assets/admin/forward_to_inbox.svg';
import ToggleSwitch from 'src/components/toggle/Toggle';

interface TopBarProps {
  onSearchChange: (value: string) => void;
  onEditClick?: () => void;
  onAddClick?: () => void;
  showToggle?: boolean;
  onToggleChange?: (checked: boolean) => void;
  onSendMessageClick?: () => void; // 추가된 prop
  onDeleteClick?: () => void;
  onSaveClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  onSearchChange,
  onAddClick,
  onEditClick,
  showToggle,
  onToggleChange,
  onSendMessageClick,
  onDeleteClick,
  onSaveClick,
}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onToggleChange) {
      onToggleChange(newCheckedState); // 토글 상태 변경 시 콜백 호출
    }
  };

  return (
    <TopBarContainer>
      <Search>
        {showToggle && <ToggleSwitch isChecked={isChecked} onToggle={handleToggleChange} />}
        <SearchInput placeholder="Search" onChange={(e) => onSearchChange(e.target.value)} />
        <Icon src={searchIcon} alt="search" />
      </Search>
      <IconWrapper>
        <Icon src={addIcon} alt="add" onClick={onAddClick} />
        <Icon src={editIcon} alt="edit" onClick={onEditClick} />
        <Icon src={deleteIcon} alt="delete" onClick={onDeleteClick} />
        <Icon src={saveIcon} alt="save" onClick={onSaveClick} />
        <Icon src={downloadIcon} alt="download" />
        <SendMessageButton onClick={onSendMessageClick}>
          <Icon src={sendMessageIcon} alt="send messages" />
          Send Messages
        </SendMessageButton>
      </IconWrapper>
    </TopBarContainer>
  );
};

export default TopBar;
