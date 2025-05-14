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

  const togglePopupVisibility = (ev) => {
    if (ev) ev.preventDefault();
    
    setIsPopupVisible((prev) => !prev);
  };

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
      <StyledHeader>
        <HeaderBlock>
          <div>
            <Title $isDarkMode={isDarkMode}>Basic Task List Template</Title>
          </div>
            <ButtonHoverEffect onClick={togglePopupVisibility} $isDarkMode={isDarkMode}>
               <ButtonDecor $isDarkMode={isDarkMode} />
            <ButtonContent>
              <ButtonIcon $isDarkMode={isDarkMode}>
                <FaPlus size={20} color={isDarkMode ? '#fff' : '#121212'} />
              </ButtonIcon>
              <ButtonText $isDarkMode={isDarkMode}>Add Task</ButtonText>
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
