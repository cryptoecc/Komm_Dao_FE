import React, { useState } from 'react';
import axios from 'axios';
import {
  Text,
  SubText,
  Email,
  NextButton,
  ErrorMessage,
  Spinner,
  SpinnerWrapper,
  VerifySection,
  Code,
  Edit,
  EditImage,
} from './addEmail.style';
import { useDispatch } from 'react-redux';
import { setEmail } from 'src/store/user/UserSlice';
import { AppDispatch } from 'src/store/store';
import { ReactComponent as MailIcon } from 'src/assets/register/mail.svg';
import { API_BASE_URL } from 'src/utils/utils';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

interface StepProps {
  onComplete: () => void;
  fromProfileUpdate?: boolean;
  onUpdateEmail?: (newEmail: string) => void;
}

const AddEmail: React.FC<StepProps> = ({ onComplete, fromProfileUpdate, onUpdateEmail }) => {
  const [email, setEmailInput] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  // verify
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [isCodeExpired, setIsCodeExpired] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
    setIsEmailValid(true);
  };

  const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
    setVerificationError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (emailPattern.test(email)) {
      console.log('Email is valid');
      setIsLoading(true);
      try {
        const response = await axios.post(`${API_BASE_URL}/api/user/send-email`, {
          email: email,
        });

        if (response.data.success) {
          setIsEmailSent(true);
        } else {
          setIsEmailSent(false);
        }
      } catch (error) {
        console.error('Failed to send email', error);
        setIsEmailValid(false);
      } finally {
        setIsLoading(false);
      }

      // onComplete(email);
    } else {
      console.log('Email is invalid');
      setIsEmailValid(false);
    }
    // onComplete(email); // 이메일을 부모 컴포넌트로 전달
  };

  const handleVerifyPin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/user/verify-pin`, {
        email: email,
        pin: verificationCode,
      });

      if (response.data.success) {
        alert('Verification successful');
        dispatch(setEmail(email));

        if (fromProfileUpdate && onUpdateEmail) {
          onUpdateEmail(email); // ProfileUpdate의 이메일 상태 업데이트
        }

        onComplete();
      } else {
        setVerificationError(response.data.message);
        console.log(response.data.message);
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        setVerificationError(error.response.data.message);
        console.log(error.response.data.message);
        if (error.response.data.message === 'Code has expired.') {
          setIsCodeExpired(true); // Code has expired 에러 처리
        }
      } else {
        console.error('Failed to verify pin', error);
        setVerificationError('Verification failed. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/user/send-email`, {
        email: email,
      });

      if (response.data.success) {
        setIsCodeExpired(false); // 새 코드 전송 후 초기화
        setVerificationError(''); // 기존 오류 메시지 초기화
        toast.success('Verification code resent successfully!');
      } else {
        toast.error('Failed to resend verification code');
      }
    } catch (error) {
      console.error('Failed to resend verification code', error);
      toast.error('Failed to resend verification code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isEmailSent ? (
        <VerifySection>
          <Text>We just sent a verification code to</Text>
          <Text style={{ color: '#6A5FEB' }}>{email}</Text>
          <br />
          <br />
          <br />
          <SubText>
            Please enter it below, once you've received it
            <br />
            (this can take up to two minutes).
            <br />
            You can also edit your email address if you need to.
          </SubText>
          <br />
          <form onSubmit={handleVerifyPin}>
            <Code>
              <input
                type="text"
                placeholder="Verification code"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault(); // 엔터키를 눌렀을 때 기본 폼 제출 동작을 막음
                  }
                }}
              />
            </Code>
            {verificationError && <ErrorMessage>{verificationError}</ErrorMessage>}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault(); // 기본 동작을 막음
                  setIsEmailSent(false); // 클릭 시 이메일 수정 모드로
                }}
              >
                <EditImage />
                <Edit>Edit Email</Edit>
              </div>
              {isCodeExpired ? (
                <NextButton type="button" onClick={handleResendCode} disabled={isLoading}>
                  Resend
                </NextButton>
              ) : (
                <NextButton type="submit" disabled={isLoading}>
                  Verify
                </NextButton>
              )}
            </div>
          </form>
        </VerifySection>
      ) : (
        <div>
          <Text>Stay Up to Date</Text>
          <br />
          <SubText>We will only email you with important updates about Komm DAO.</SubText>
          <form onSubmit={handleSubmit}>
            <Email>
              <MailIcon />
              <input type="text" placeholder="Email address" value={email} onChange={handleEmailChange} />
            </Email>
            {!isEmailValid && <ErrorMessage>Please enter a valid email address (ex. user@example.com)</ErrorMessage>}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', marginTop: '20px' }}>
              {isLoading && (
                <SpinnerWrapper>
                  <Spinner />
                </SpinnerWrapper>
              )}
              <NextButton type="submit" disabled={isLoading}>
                Next
              </NextButton>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddEmail;
