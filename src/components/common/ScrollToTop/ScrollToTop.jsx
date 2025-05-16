import styled, { css } from 'styled-components';

import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 30px;
  right: 30px;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  background-color: #fff;

  &:hover{
   background-color: #f5f7fa;
  }

  &.show {
    display: block;
  }
`;

function ScrollToTop({ visible }) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollToTopButton onClick={scrollToTop} className="show">
        <FaArrowUp color='#000000' />
    </ScrollToTopButton>
      
  );
}

export default ScrollToTop;
