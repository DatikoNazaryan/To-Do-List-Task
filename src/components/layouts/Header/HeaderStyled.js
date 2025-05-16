import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 10px 20px;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#333' : '#fff')};
  display: flex;
  justify-content: space-around;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 30px;
  z-index: 999;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  color: white;
  background: ${({ $isscrolled }) =>
    $isscrolled ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
  backdrop-filter: ${({ $isscrolled }) => ($isscrolled ? 'blur(10px)' : 'none')};
  -webkit-backdrop-filter: ${({ $isscrolled }) =>
    $isscrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ $isscrolled }) =>
    $isscrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
  border-bottom: ${({ $isscrolled }) =>
    $isscrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'};
`;

export const HeaderBlock = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Title = styled.h1`
   color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#000')};
`;

export const StyleButton = styled.button`
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#333' : '#fff')};
  color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#121212')};
  border-radius: 1.5rem;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
  position: relative;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  transition: background-color 0.5s ease, font-weight 0.5s ease;

  &:hover {
    background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#555' : '#ddd')};
  }
    
`;

export const ButtonDecor = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#fc7d0b' : '#ddd')};
  transition: background-color 0.5s ease, font-weight 0.5s ease;
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: 0;
`;

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export const ButtonIcon = styled.span`
  width: 48px;
  height: 100%;
  background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#fc7d0b' : '#ddd')};
  transition: background-color 0.5s ease, font-weight 0.5s ease;
  display: grid;
  place-items: center;
  margin-right: 10px;
`;

export const ButtonText = styled.span`
  display: inline-block;
  transition: color 0.2s;
  padding: 2px 1.5rem 2px;
  padding-left: 0.75rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;

  &:hover {
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#000')};
  }
`;

export const ButtonHoverEffect = styled(StyleButton)`

  &:hover ${ButtonDecor} {
    transform: translateX(0);
  }
`;
