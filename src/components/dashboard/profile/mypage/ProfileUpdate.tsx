import React, { useState } from 'react';
import styled from 'styled-components';

interface ProfileEditFormProps {
  onSave: () => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ onSave }) => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 처리 후 저장
    onSave();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormField>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormField>
      <FormField>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormField>
      <SubmitButton type="submit">Save Changes</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #875cff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default ProfileEditForm;
