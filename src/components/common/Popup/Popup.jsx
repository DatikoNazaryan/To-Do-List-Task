import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';


import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  width: 60%;
  height: 60vh;
  background-color: #fff;
  border-radius: 12px;
  padding: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CloseIcon = styled.svg`
  display: block;
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  color: #ccc;
  z-index: 1;
  &:hover {
    color: #000;
  }
`;

const Popup = ({ children, onClose, className = '' }) => {
  const popupPlaceholder = document.getElementById('popupPlaceholder');

  const element = (
    <Container onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()} className={className}>
        {children}
        <CloseIcon onClick={onClose}>
          <FaTimes
            className="absolute top-6 right-6 w-4 h-4 text-gray-400 cursor-pointer"
          />
        </CloseIcon>
      </Content>
    </Container>
  );

  return createPortal(element, popupPlaceholder);
};

export default Popup;
