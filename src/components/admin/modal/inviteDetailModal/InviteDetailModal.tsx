import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일 설정
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 1000px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  float: right;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 10px;
  width: 100%;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    vertical-align: middle;
    border-bottom: 3px solid #e3d9ff;
  }

  th {
    text-align: left;
    font-weight: bold;
    border-bottom: 3px solid #e3d9ff;
  }

  td {
    font-size: 16px;
  }
`;

const ViewButton = styled.button`
  background: none;
  border: none;
  color: #404040;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const ViewText = styled.span`
  text-decoration: underline;
`;

const DownArrowIcon = styled.span`
  margin-left: 5px;
  font-size: 12px;
`;

// 초대자 정보 인터페이스
interface InviterDetails {
  inviterName: string;
  invitedMembers: number;
  acceptedMembers: number;
  rejectedMembers: number;
  email: string;
  inviteeList: InviteeDetails[];
}

interface InviteeDetails {
  inviteeEmail: string;
  status: string;
  inviteDate: string;
  statusDate: string;
}

interface InviteDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  inviteDetails: InviterDetails[]; // 여러 명의 초대자 정보를 받음
}

const InviteDetailsModal: React.FC<InviteDetailsModalProps> = ({ isOpen, onClose, inviteDetails }) => {
  const [visibleInvitees, setVisibleInvitees] = useState<number | null>(null); // 어떤 초대자의 View 버튼을 클릭했는지 기억
  console.log(inviteDetails);
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        {inviteDetails ? (
          <ModalBody>
            <InfoTable>
              <thead>
                <tr>
                  <th style={{ width: '200px' }}>Inviter Name</th>
                  <th style={{ width: '205px' }}>Invited Members</th>
                  <th>Accepted Members</th>
                  <th>Rejected Members</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {inviteDetails.map((inviter, inviterIndex) => (
                  <React.Fragment key={inviterIndex}>
                    <tr
                      style={{
                        backgroundColor: visibleInvitees === inviterIndex ? '#E3D9FF' : 'transparent',
                      }}
                    >
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                          <span>{inviter.inviterName}</span>
                          <span>{inviter.email}</span>
                        </div>
                      </td>
                      <td>{inviter.invitedMembers}</td>
                      <td>{inviter.acceptedMembers}</td>
                      <td>{inviter.rejectedMembers}</td>
                      <td>
                        <ViewButton
                          onClick={() => setVisibleInvitees(visibleInvitees === inviterIndex ? null : inviterIndex)}
                        >
                          <ViewText>View</ViewText>
                          <DownArrowIcon>&#9660;</DownArrowIcon>
                        </ViewButton>
                      </td>
                    </tr>

                    {visibleInvitees === inviterIndex && (
                      <tr>
                        {/* 빈 공간을 유지하기 위해 td를 추가 */}
                        <td colSpan={5} style={{ padding: 0 }}>
                          <InfoTable>
                            <thead>
                              <tr style={{ backgroundColor: '#E7E7E7' }}>
                                <th style={{ width: '200px' }}>Invited Members</th>
                                <th style={{ width: '90px' }}>Invitee Email</th>
                                <th style={{ width: '220px' }}>Status</th>
                                <th style={{ width: '180px' }}>Invite Date</th>
                                <th>Status Date</th>
                              </tr>
                            </thead>
                            <tbody style={{ backgroundColor: '#E7E7E7' }}>
                              {inviter.inviteeList.map((invitee, index) => (
                                <tr key={index}>
                                  <td></td>
                                  <td>{invitee.inviteeEmail}</td>
                                  <td>{invitee.status}</td>
                                  <td>{invitee.inviteDate}</td>
                                  <td>{invitee.statusDate}</td>
                                </tr>
                              ))}
                            </tbody>
                          </InfoTable>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </InfoTable>
          </ModalBody>
        ) : (
          <p>Loading...</p>
        )}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default InviteDetailsModal;
