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

interface StepProps {
  onComplete: () => void;
}

const AddEmail: React.FC<StepProps> = ({ onComplete }) => {
  const [email, setEmailInput] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  // verify
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');

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
        onComplete();
      } else {
        setVerificationError(response.data.message);
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        setVerificationError(error.response.data.message);
      } else {
        console.error('Failed to verify pin', error);
        setVerificationError('Verification failed. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isEmailSent ? (
        <VerifySection>
          <Text>We just sent a verification code to</Text>
          <Text style={{ color: '#8E63FF' }}>{email}</Text>
          <br />
          <SubText>
            Please enter it below, once you've received it
            <br />
            (this can take up to two minutes).
            <br />
            You can also edit your email address if you need to.
          </SubText>
          <form onSubmit={handleVerifyPin}>
            <Code>
              <input
                type="text"
                placeholder="Verification code"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
              />
            </Code>
            {verificationError && <ErrorMessage>{verificationError}</ErrorMessage>}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <EditImage />
                <Edit>Edit Email</Edit>
              </div>
              <NextButton type="submit">Verify</NextButton>
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
