import React from 'react';
import { TopBarContainer, Search, SearchInput, IconWrapper, Icon, SendMessageButton } from './Topbar.style';
import searchIcon from 'src/assets/admin/search.svg';
import addIcon from 'src/assets/admin/add_circle.svg';
import editIcon from 'src/assets/admin/edituser.svg';
import deleteIcon from 'src/assets/admin/delete.svg';
import saveIcon from 'src/assets/admin/save.svg';
import downloadIcon from 'src/assets/admin/download.svg';
import sendMessageIcon from 'src/assets/admin/forward_to_inbox.svg';

interface TopBarProps {
  onSearchChange: (value: string) => void;
  onEditClick?: () => void;
  onAddClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSearchChange, onAddClick, onEditClick }) => {
  return (
    <TopBarContainer>
      <Search>
        <SearchInput placeholder="Search" onChange={(e) => onSearchChange(e.target.value)} />
        <Icon src={searchIcon} alt="search" />
      </Search>
      <IconWrapper>
        <Icon src={addIcon} alt="add" onClick={onAddClick} />
        <Icon src={editIcon} alt="edit" onClick={onEditClick} />
        <Icon src={deleteIcon} alt="delete" />
        <Icon src={saveIcon} alt="save" />
        <Icon src={downloadIcon} alt="download" />
        <SendMessageButton>
          <Icon src={sendMessageIcon} alt="send messages" />
          Send Messages
        </SendMessageButton>
      </IconWrapper>
    </TopBarContainer>
  );
};

export default TopBar;
