import styled from "styled-components";

export const Sort = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

export const RadioInputs = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 4px;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#444' : '#f5f7fa')};
  transition: background-color 0.5s ease, font-weight 0.5s ease;
  box-sizing: border-box;
  padding: 0.25rem;
  width: 240px;
  font-size: 14px;
  height: 46px;
  transition: clip-path 0.3s ease;
`;

export const Radio = styled.label`
  flex: 1 1 auto;
  text-align: center;
`;

export const HiddenRadio = styled.input`
  display: none;
`;

export const RadioItem = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  padding: 0.5rem 0;
  color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#000')};
  background-color: ${({ selected, $isdarkmode }) => (selected ? $isdarkmode ? '#fc7d0b' : '#99ff99' : 'transparent')};
  transition: background-color 0.5s ease, font-weight 0.5s ease;
  font-weight: ${({ selected }) => (selected ? 600 : 'normal')};
  transition: background-color 0.5s ease, font-weight 0.5s ease;
`;