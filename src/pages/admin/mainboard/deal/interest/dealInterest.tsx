import {
  DiscoverContainer,
  Title,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  CheckboxContainer,
  Checkbox,
  Checkmark,
  TableWrapper,
  Popup,
  PaymentButton,
  EditableInput,
  CalculateButton,
  DatePickerWrapper,
  DateIcon,
  DateText,
} from './dealinterest.style';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { API_BASE_URL } from 'src/utils/utils';
import TopBar from 'src/components/admin/topbar/Topbar';
import headerbox from 'src/assets/admin/headerbox.svg';
import checkbox from 'src/assets/admin/cellbox.svg';
import checkmark from 'src/assets/admin/cell_check.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calenderIcon from 'src/assets/admin/calendar_month.svg';
import MessageModal from 'src/components/admin/modal/sendMessage/MessageModal';

const AdminInterest = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [dealData, setDealData] = useState<any[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [finalCaps, setFinalCaps] = useState<{ [key: number]: string | number }>({});
  const [paymentDueDates, setPaymentDueDates] = useState<{ [key: number]: Date | null }>({}); // Payment Due Date 상태 관리

  // Message 상태값
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const [modalTitle, setModalTitle] = useState(''); // 모달 제목 상태
  const [modalContent, setModalContent] = useState(''); // 모달 내용 상태
  const [modalChannel, setModalChannel] = useState(''); // 모달 채널 상태
  const [currentUserData, setCurrentUserData] = useState<any>(null); // 선택된 유저의 데이터

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const generateMessageForUser = (deal: any, paymentDueDate: string) => {
    return `안녕하세요 ${deal.user_name}님,
  
  신청하신 ${deal.deal_name} 프로젝트에 대한 투자금 납입 안내드립니다.
  
  하기 안내사항에 따라 투자금을 납입하여 주시되, 납입 기한을 반드시 지켜 주시기 바랍니다.
  
  투자금 납입 완료 후, 트랜잭션 해시(TX hash) 링크를 아래 구글폼을 통해 제출해주십시오.
  
  구글폼 링크: ${modalChannel}
  
  □ 납입 화폐
  USDT-ERC20
  
  □ 납입 수량
  ${deal.user_final_allocation !== undefined ? deal.user_final_allocation : '--'} USDT
  
  □ 납입 기한
  ${paymentDueDate} 자정까지
  
  □ 납입 주소
  0x2dB0544f170157077B60baB07f33b1E3d32750D6
  
  ※ 회원의 네트워크 선택 또는 주소 기재 오류로 오입금이 발생하는 경우, Komm DAO는 손해배상, 복구지원 등 책임을 부담하지 않습니다.
  
  추가적인 문의사항 있으시거나 부득이하게 납입 기한까지 송금하지 못하시는 분은 메일 회신 혹은 디스코드 채널의 open-ticket으로 문의 부탁드립니다. 기한을 못 지킬 시 불이익이 발생할 수 있습니다.
  
  감사합니다.`;
  };

  // const handleOpenModal = () => {
  //   // 선택된 모든 행의 데이터를 수집
  //   const selectedDealsData = filteredDeals
  //     .filter((deal) => selectedRows.has(deal.deal_id)) // selectedRows에 포함된 deal_id만 필터링
  //     .map((deal) => {
  //       return ` 안녕하세요 ${deal.user_name}님,

  // 신청하신 ${deal.deal_name} 프로젝트에 대한 투자금 납입 안내드립니다.

  // 하기 안내사항에 따라 투자금을 납입하여 주시되, 납입 기한을 반드시 지켜 주시기 바랍니다.

  // 투자금 납입 완료 후, 트랜잭션 해시(TX hash) 링크를 아래 구글폼을 통해 제출해주십시오.

  // 구글폼 링크:

  // □ 납입 화폐
  // USDT-ERC20

  // □ 납입 수량

  // ${deal.user_final_allocation !== undefined ? deal.user_final_allocation : '--'} USDT

  // □ 납입 기한
  // ${formatDate(paymentDueDates[deal.deal_id])} 자정까지

  // □ 납입 주소
  // 0x2dB0544f170157077B60baB07f33b1E3d32750D6

  // ※ 회원의 네트워크 선택 또는 주소 기재 오류로 오입금이 발생하는 경우, Komm DAO는 손해배상, 복구지원 등 책임을 부담하지 않습니다.

  // 추가적인 문의사항 있으시거나 부득이하게 납입 기한까지 송금하지 못하시는 분은 메일 회신 혹은 디스코드 채널의 open-ticket으로 문의 부탁드립니다. 기한을 못 지킬 시 불이익이 발생할 수 있습니다.

  // 감사합니다.;`;
  //     });
  //   console.log('Selected Deals Data:', selectedDealsData); // 선택된 모든 deal의 데이터를 확인

  //   // 수집한 데이터를 모달 Content에 반영
  //   setModalContent(selectedDealsData.join('\n\n')); // 각 딜 내용을 두 줄 간격으로 구분
  //   setIsModalOpen(true); // 모달 열기
  // };
  // const handleOpenModal = () => {
  //   // 선택된 모든 행의 데이터를 수집
  //   const selectedDealsData = filteredDeals
  //     .filter((deal) => selectedRows.has(deal.deal_id)) // 선택된 행의 deal_id만 필터링
  //     .map((deal) => ({
  //       dealName: deal.deal_name,
  //       userName: deal.user_name,
  //       finalAllocation: deal.user_final_allocation !== undefined ? deal.user_final_allocation : '--',
  //       paymentDueDate: formatDate(paymentDueDates[deal.deal_id]),
  //     }));
  //   console.log('Selected Deals Data:', selectedDealsData); // 선택된 모든 deal의 데이터를 확인

  //   // 수집한 데이터를 모달 Content에 반영
  //   setModalContent(selectedDealsData.join('\n\n')); // 각 딜 내용을 두 줄 간격으로 구분
  //   setIsModalOpen(true); // 모달 열기
  // };

  const handleOpenModal = () => {
    const selectedDealsData = filteredDeals
      .filter((deal) => selectedRows.has(deal.deal_id)) // 선택된 딜 필터링
      .map((deal) => generateMessageForUser(deal, formatDate(paymentDueDates[deal.deal_id]))); // 메시지 생성

    // 메시지 데이터 설정
    setModalContent(selectedDealsData.join('\n\n')); // 각 딜 간 두 줄 간격 추가
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSendMessages = async () => {
    console.log('Selected Rows:', Array.from(selectedRows)); // 선택된 deal_id가 정확히 들어가는지 확인
    console.log('Filtered Deals:', filteredDeals); // 필터링된 deals가 정확히 포함되는지 확인

    const messagePayload = filteredDeals
      .filter((deal) => selectedRows.has(deal.deal_id)) // selectedRows에 포함된 deal_id만 필터링
      .map((deal) => {
        // 사용자에게 보낼 메시지 생성
        const userMessage = generateMessageForUser(deal, formatDate(paymentDueDates[deal.deal_id]));

        return {
          deal_name: deal.deal_name,
          user_name: deal.user_name,
          final_allocation: deal.user_final_allocation || '--',
          payment_due_date: formatDate(paymentDueDates[deal.deal_id]),
          message: userMessage, // 사용자 메시지를 payload에 추가
        };
      });

    console.log('Message Payload:', messagePayload); // 전체 Payload 데이터 확인

    try {
      // 백엔드로 메시지 전송
      await axios.post(`${API_BASE_URL}/api/admin/deal-interestMsg`, {
        title: modalTitle,
        content: modalContent, // modalContent를 그대로 전송
        channel: modalChannel,
        deals: messagePayload, // 변환된 messagePayload 전송
      });

      // 성공 시 알림 및 모달 닫기
      toast.success('Messages Sent Successfully!', {
        position: 'top-right',
        autoClose: 1000,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error sending messages:', error);
      toast.error('Failed to send messages.', {
        position: 'top-right',
        autoClose: 1000,
      });
    }
  };

  // 데이터 불러오기 함수 (기존 코드 수정)
  const fetchDeals = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/deal-interest`);
      setDealData(response.data);
      setFilteredDeals(response.data);
      console.log(response.data);
      setIsDataLoaded(true); // 데이터가 불러와진 상태로 설정
    } catch (error) {
      console.error('Error fetching deal interest data:', error);
    }
  };

  // useEffect 수정
  useEffect(() => {
    if (!isDataLoaded) {
      fetchDeals();
    }
    setModalChannel('https://forms.gle/8zBuf3Z5r7E4nyoD8');
  }, [isDataLoaded]);

  // 데이터 필터링 (검색어 기준)
  useEffect(() => {
    const filteredData = dealData.filter((deal) => {
      return Object.values(deal).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredDeals(filteredData);
  }, [searchTerm, dealData]);

  // 체크박스 기능
  const handleCheckboxChange = (deal_id: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(deal_id)) {
        newSelectedRows.delete(deal_id);
      } else {
        newSelectedRows.add(deal_id);
      }
      return newSelectedRows;
    });
  };

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedRows(new Set());
    } else {
      const allIds = new Set(dealData.map((deal) => deal.deal_id));
      setSelectedRows(allIds);
    }
    setIsAllSelected(!isAllSelected);
  };

  // 복사 기능
  const handleCellClick = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success('Copied to clipboard!', {
        position: 'top-right',
        autoClose: 1000,
      });
    } catch (error) {
      toast.error('Failed to copy', {
        position: 'top-right',
        autoClose: 1000,
      });
    }
  };

  // 할당량 계산 함수
  const handleCalculate = (dealId: number) => {
    const updatedDeals = filteredDeals.map((deal) => {
      if (deal.deal_id === dealId) {
        const { total_interest, user_interest } = deal;

        // 유효성 검사
        if (!finalCaps[dealId] || !total_interest) {
          toast.error('Final Cap and Total Interest values are required for calculation.');
          return deal;
        }

        // 계산식: (Final Cap / Total Interest) * User Interest
        const calculatedAllocation = (Number(finalCaps[dealId]) / total_interest) * user_interest;
        console.log(calculatedAllocation);
        // 각 유저의 할당량 업데이트
        return { ...deal, user_final_allocation: calculatedAllocation.toFixed(2) };
      }
      console.log(deal);
      return deal;
    });

    setFilteredDeals(updatedDeals);
    console.log('Updated Final Allocation:', updatedDeals);
    toast.success('All User Allocations have been updated.', {
      position: 'top-right',
      autoClose: 1000,
    });
  };

  // Payment Due Date 변경 함수
  const handleDateChange = (date: Date | null, dealId: number) => {
    setPaymentDueDates((prevDates) => ({
      ...prevDates,
      [dealId]: date,
    }));
  };

  // 그룹의 첫 번째 행만 Payment 버튼 표시
  const findFirstRowIndex = (dealName: string) => {
    return filteredDeals.findIndex((deal) => deal.deal_name === dealName);
  };

  // 날짜 포맷 함수
  const formatDate = (date: Date | null) => {
    if (!date) return '--';
    return date.toLocaleDateString('ko-KR'); // 한국 날짜 형식으로 변경 (2024-09-30)
  };

  const handlePaymentPendingClick = async (dealId: number) => {
    // 1. 딜 ID로 해당 딜에 속하는 모든 유저 데이터 필터링
    const targetDeals = filteredDeals.filter((deal) => deal.deal_id === dealId);
    if (targetDeals.length === 0) {
      toast.error('Deal not found for this ID.', {
        position: 'top-right',
        autoClose: 1000,
      });
      return;
    }

    // 2. Final Cap과 Payment Due Date가 유효한지 확인
    if (!finalCaps[dealId] || !paymentDueDates[dealId]) {
      toast.error('Please enter valid Final Cap and Payment Due Date.', {
        position: 'top-right',
        autoClose: 1000,
      });
      return;
    }

    // 3. 모든 유저에 대해 백엔드 서버로 상태 업데이트 요청
    try {
      const updatePromises = targetDeals.map((deal) => {
        return axios.put(`${API_BASE_URL}/api/admin/update-payment-period`, {
          deal_id: dealId,
          user_id: deal.user_id, // 각 유저의 ID를 함께 전송
          user_name: deal.user_name,
          deal_status: 'Payment_Period', // 상태 변경
          final_cap: finalCaps[dealId],
          payment_due_date: formatDate(paymentDueDates[dealId]),
          user_final_allocation: deal.user_final_allocation || '--',
        });
      });

      // 모든 업데이트 요청이 완료될 때까지 대기
      await Promise.all(updatePromises);

      // 4. 응답 확인 후 성공 시 상태 업데이트 및 UI 갱신
      const updatedDeals = filteredDeals.map((deal) =>
        deal.deal_id === dealId
          ? {
              ...deal,
              deal_status: 'Payment_Period', // 상태 변경
              final_cap: finalCaps[dealId],
              user_final_allocation: deal.user_final_allocation,
              payment_due_date: formatDate(paymentDueDates[dealId]),
            }
          : deal
      );

      setFilteredDeals(updatedDeals);

      toast.success('Deal status updated successfully for all users.', {
        position: 'top-right',
        autoClose: 1000,
      });

      fetchDeals(); // 업데이트된 데이터를 다시 가져와서 UI에 반영
    } catch (error) {
      console.error('Error updating deal status for multiple users:', error);
      toast.error('Failed to update deal status for all users.', {
        position: 'top-right',
        autoClose: 1000,
      });
    }
  };

  // Payment Verify 버튼 클릭 시 동작하는 함수
  const handlePaymentVerifyClick = async (dealId: number) => {
    try {
      // 예시 API 호출 (실제 API 경로와 요청 방식에 맞게 수정)
      const response = await axios.put(`${API_BASE_URL}/api/admin/update-verify-status`, {
        deal_id: dealId,
      });

      if (response.status === 200) {
        toast.success('Payment status successfully verified!', {
          position: 'top-right',
          autoClose: 1000,
        });

        // 상태 업데이트 후 데이터를 다시 가져와 UI에 반영
        fetchDeals();
      } else {
        toast.error('Failed to verify payment status.', {
          position: 'top-right',
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error('Error verifying payment status:', error);
      toast.error('Error verifying payment status.', {
        position: 'top-right',
        autoClose: 1000,
      });
    }
  };

  const handlePaymentCompleteClick = async (dealId: number) => {
    try {
      // 예시 API 호출 (실제 API 경로와 요청 방식에 맞게 수정)
      const response = await axios.put(`${API_BASE_URL}/api/admin/update-complete-status`, {
        deal_id: dealId,
      });

      if (response.status === 200) {
        toast.success('Payment status successfully completed!', {
          position: 'top-right',
          autoClose: 1000,
        });

        // 상태 업데이트 후 데이터를 다시 가져와 UI에 반영
        fetchDeals();
      } else {
        toast.error('Failed to complete payment status.', {
          position: 'top-right',
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error('Error completing payment status:', error);
      toast.error('Error completing payment status.', {
        position: 'top-right',
        autoClose: 1000,
      });
    }
  };

  return (
    <DiscoverContainer>
      <Title>Deal Interest</Title>
      <TopBar
        onSearchChange={setSearchTerm}
        // onAddClick={}
        showToggle={false}
        onSendMessageClick={handleOpenModal}
      />
      <TableWrapper>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>
                <CheckboxContainer onClick={handleSelectAllChange}>
                  <Checkbox src={headerbox} alt="checkbox" />
                  {isAllSelected && <Checkmark src={checkmark} alt="checkmark" />}
                </CheckboxContainer>
              </TableHeader>
              <TableHeader>Deal Name</TableHeader>
              <TableHeader>Deal Status</TableHeader>
              <TableHeader>User Name</TableHeader>
              <TableHeader>User Interest</TableHeader>
              <TableHeader>Total Interest</TableHeader>
              {/* 빈 셀들 */}
              <TableHeader>Final Cap</TableHeader>
              <TableHeader>User Final Allocation</TableHeader>
              <TableHeader>Payment Amount</TableHeader>
              <TableHeader>Payment Status</TableHeader>
              <TableHeader>Payment Due Date</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {filteredDeals.map((deal, index) => (
              <TableRow key={`${deal.deal_id}-${index}`} $isSelected={selectedRows.has(deal.deal_id)}>
                <TableCell
                  $isSelected={selectedRows.has(deal.deal_id)}
                  onClick={() => handleCheckboxChange(deal.deal_id)}
                >
                  <CheckboxContainer>
                    <Checkbox src={checkbox} alt="checkbox" />
                    {selectedRows.has(deal.deal_id) && <Checkmark src={checkmark} alt="checkmark" />}
                  </CheckboxContainer>
                </TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>{deal.deal_name}</TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>
                  {/* deal_status가 PAYMENT_PENDING일 때 Payment Pending 버튼, PAYMENT_VERIFY일 때 Payment_Verify 버튼 */}
                  {deal.deal_status === 'PAYMENT_PENDING' && index === findFirstRowIndex(deal.deal_name) ? (
                    <PaymentButton onClick={() => handlePaymentPendingClick(deal.deal_id)}>
                      Payment Pending
                    </PaymentButton>
                  ) : deal.deal_status === 'PAYMENT_VERIFY' && index === findFirstRowIndex(deal.deal_name) ? (
                    <PaymentButton onClick={() => handlePaymentVerifyClick(deal.deal_id)}>Payment Verify</PaymentButton>
                  ) : deal.deal_status === 'PAYMENT_COMPLETED' && index === findFirstRowIndex(deal.deal_name) ? (
                    <PaymentButton onClick={() => handlePaymentCompleteClick(deal.deal_id)}>
                      Payment Completed
                    </PaymentButton>
                  ) : (
                    deal.deal_status || '--'
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>{deal.user_name}</TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>{deal.user_interest}</TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>{deal.total_interest}</TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>
                  {deal.deal_status === 'PAYMENT_PENDING' && index === findFirstRowIndex(deal.deal_name) ? (
                    <>
                      <EditableInput
                        type="number"
                        value={finalCaps[deal.deal_id] !== undefined ? finalCaps[deal.deal_id] : ''} // undefined일 경우 빈 문자열로 초기화
                        onChange={(e) => setFinalCaps((prev) => ({ ...prev, [deal.deal_id]: e.target.value }))}
                      />
                      <CalculateButton onClick={() => handleCalculate(deal.deal_id)}>Cal</CalculateButton>
                    </>
                  ) : (
                    deal.final_cap || '--'
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>
                  {deal.deal_status === 'PAYMENT_PENDING' ? (
                    <EditableInput value={deal.user_final_allocation} readOnly />
                  ) : (
                    deal.user_final_allocation || '--'
                  )}
                </TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>{deal.user_payment_amount}</TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>{deal.payment_status}</TableCell>
                <TableCell $isSelected={selectedRows.has(deal.deal_id)}>
                  {deal.deal_status === 'PAYMENT_PENDING' &&
                  index === filteredDeals.findIndex((d) => d.deal_name === deal.deal_name) ? (
                    <DatePickerWrapper>
                      <DatePicker
                        selected={paymentDueDates[deal.deal_id] || null}
                        onChange={(date) => handleDateChange(date, deal.deal_id)}
                        dateFormat="yyyy-MM-dd"
                        customInput={<DateIcon src={calenderIcon} alt="calendar icon" />}
                      />
                      <DateText>{formatDate(paymentDueDates[deal.deal_id])}</DateText>
                    </DatePickerWrapper>
                  ) : (
                    deal.payment_due_date || '--'
                  )}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      <ToastContainer />
      <MessageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSend={handleSendMessages}
        title={modalTitle}
        content={modalContent}
        channel={modalChannel}
        setTitle={setModalTitle}
        setContent={setModalContent}
        setChannel={setModalChannel}
        formLink="Google Form URL"
      />
    </DiscoverContainer>
  );
};

export default AdminInterest;
