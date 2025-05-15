import styled, { css } from 'styled-components';

export const OpenManu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  gap: 4px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #cccccc8f;
  }
`;

export const IconBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 15px;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 5px;
  border: none;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#f5f7fa')};
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#fc7d0b' : '#99ff99')};
  }

  ${(props) =>
    props.checked &&
    css`
      background-color: #cccccc8f;
    `}
`;

export const Manu = styled.div`
  position: absolute;
  width: 100px;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#f5f7fa')};
  right: 0;
  top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px 0;
  box-shadow: -7px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 15px;
  z-index: 1;
  display: block;
`;