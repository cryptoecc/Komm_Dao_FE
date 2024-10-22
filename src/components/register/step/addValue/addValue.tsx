import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from 'src/store/user/UserSlice';
import {
  Text,
  SubText,
  Textarea,
  Counter,
  ErrorMessage,
  Submit,
  FormContainer,
  ButtonContainer,
} from './addValue.style';

interface StepProps {
  onComplete: () => void;
}

const AddValue: React.FC<StepProps> = ({ onComplete }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [valueLength, setValueLength] = useState(0);
  const [valueError, setValueError] = useState('');

  const handleSubmit = async () => {
    if (valueLength < 100) {
      setValueError('Value must be at least 100 characters long.');
      return;
    }

    dispatch(setUserData({ value_add: value }));
    onComplete();
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setValueLength(e.target.value.length);
    setValueError('');
  };
  return (
    <FormContainer>
      <div>
        <Text>Add Value</Text>
        <SubText>Please describe how you can Add Value</SubText>
        <SubText>to Komm DAO. This information is crucial for the</SubText>
        <SubText>approval process.</SubText>

        <form>
          <Textarea
            placeholder="Please write up to 500 characters, including spaces, with a minimum of 100 characters."
            value={value}
            onChange={handleValueChange}
            maxLength={500}
          ></Textarea>
          {valueError && <ErrorMessage>{valueError}</ErrorMessage>}
          <Counter>{valueLength}/500</Counter>
        </form>
      </div>

      <ButtonContainer>
        <Submit onClick={handleSubmit}>Submit</Submit>
      </ButtonContainer>
    </FormContainer>
  );
};

export default AddValue;
