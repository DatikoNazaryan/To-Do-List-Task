import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledInput = styled.input`
  margin: 10px 0;
  width: 325px;
  height: 30px;
  border-radius: 10px;
  border: 0.5px solid hsl(0, 0%, 80%);
  padding-left: 7px;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#444' : '#fff')};
  color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#000')};

  &:hover {
    border-color: ${({ $isdarkmode }) => ($isdarkmode ? '#fc7d0b' : '#99ff99')};
  }

  &:focus {
    border: 1px solid ${({ $isdarkmode }) => ($isdarkmode ? '#fc7d0b' : '#99ff99')};
    outline: none;
  }
`;

export const StyledTextarea = styled.textarea`
  margin-top: 5px;
  width: 325px;
  height: 100px;
  border-radius: 10px;
  padding-left: 7px;
  padding-top: 3px;
  resize: none;
  border: 0.5px solid hsl(0, 0%, 80%);
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#444' : '#fff')};
  color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#000')};

  &:hover {
    border-color: ${({ $isdarkmode }) => ($isdarkmode ? '#fc7d0b' : '#99ff99')};
  }

  &:focus {
    border: 1px solid ${({ $isdarkmode }) => ($isdarkmode ? '#fc7d0b' : '#99ff99')};
    outline: none;
  }
`;

export const ButtonBlock = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  display: inline-block;
  padding: 8px 30px;
  margin: 5px;
  border-radius: 15px;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#444' : '#ccc')};
  color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#000')}; 
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#fc7d0b' : '#99ff99')}; 
  }

  &:disabled {
    border: 1px solid #ccc;
    background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#444' : '#f5f5f5')};
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;
