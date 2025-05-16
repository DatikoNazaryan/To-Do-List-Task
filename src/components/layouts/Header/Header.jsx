import { useState, useEffect, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import Popup from '../../common/Popup/Popup.jsx';
import IsDarkModeInpute from './IsDarkModeInput/IsDarkModeInput.jsx';

import {
  StyledHeader,
  HeaderBlock,
  Title,
  ButtonDecor,
  ButtonContent,
  ButtonIcon,
  ButtonText,
  ButtonHoverEffect
} from './HeaderStyled.js';

const AddTaskForm = lazy(() => import('../../features/AddTaskForm/addTaskForm.jsx'));

function Header() {
  const isDarkMode = useSelector((store) => store.isDarkTheme.isDarkThemeActive);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const togglePopupVisibility = (ev) => {
    if (ev) ev.preventDefault();
    
    setIsPopupVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupVisible]);

  return (
    <>
      <StyledHeader $isscrolled={scrolled ? 'true' : undefined} $isdarkmode={isDarkMode ? 'true' : undefined}>
        <HeaderBlock>
          <div>
            <Title $isdarkmode={isDarkMode ? 'true' : undefined}>Basic Task List Template</Title>
          </div>
            <ButtonHoverEffect onClick={togglePopupVisibility} $isdarkmode={isDarkMode ? 'true' : undefined}>
               <ButtonDecor $isdarkmode={isDarkMode ? 'true' : undefined} />
            <ButtonContent>
              <ButtonIcon $isdarkmode={isDarkMode ? 'true' : undefined}>
                <FaPlus size={20} color={isDarkMode ? '#fff' : '#121212'} />
              </ButtonIcon>
              <ButtonText $isdarkmode={isDarkMode ? 'true' : undefined}>Add Task</ButtonText>
            </ButtonContent>
            </ButtonHoverEffect>
        </HeaderBlock>
        <IsDarkModeInpute />
      </StyledHeader>

      {isPopupVisible && (
        <Popup onClose={togglePopupVisibility}>
          <Suspense fallback={<p>Content is loading...</p>}>
            <AddTaskForm onClose={togglePopupVisibility} />
          </Suspense>
        </Popup>
      )}
    </>
  );
}

export default Header;
