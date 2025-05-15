import { useState, useEffect, Suspense,lazy, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OpenManu, IconBtn, Manu } from './MenuStyled';

import Popup from '../Popup/Popup';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { FiMoreVertical  } from 'react-icons/fi';
import { deleteTask } from '../../../store/slices/taskSlice';

const UptadeTask = lazy(() => import('../../features/UpdateTask/UpdateTask'));

function Menu ({id, title, description, sortBy}) {
  const dispatch = useDispatch();
   const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);
  const [ openManu, setOpenManu ] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const menuRef = useRef(null);

   const togglePopupVisibility = (ev) => {
      if(ev) {
        ev.preventDefault();
      }
  
      setIsPopupVisible(prevState => !prevState);
      setOpenManu(false);
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

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenManu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);  

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

    return(
         <>
              <div>
                <OpenManu ref={menuRef}>
                <FiMoreVertical
                  onClick={() => setOpenManu(!openManu)}
                  size={20}
                  color={isDarkMode ? '#bbb' : '#333'}
                  style={{ transition: 'color 0.2s ease' }}
                />
                {openManu && (
                    <Manu $isDarkMode={isDarkMode}>
                      <IconBtn $isDarkMode={isDarkMode} onClick={togglePopupVisibility}><FaEdit size={20} color="blue" title="Edit" />Edit</IconBtn>
                      <IconBtn $isDarkMode={isDarkMode} onClick={handleDelete}><FaTrash size={20} color="red" title="Delete" />Delete</IconBtn>
                    </Manu>
                )}
              </OpenManu>
              </div>           
            {
             isPopupVisible && (
             <Popup onClose={togglePopupVisibility}>
              <Suspense fallback={<p>Content is loading...</p>}>
                 <UptadeTask 
                   onClose={togglePopupVisibility} 
                   id={id}
                   title={title}
                   description={description}
                   sortBy={sortBy}
                />
               </Suspense>
            </Popup>
              )
            }
         </>
    );
}

export default Menu;
