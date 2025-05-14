import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#f5f7fa')};
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#333')};
  transition: background-color 0.5s ease, font-weight 0.5s ease;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #fff;
    box-shadow: 0 0 5px #fff;
  }

  option {
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#f5f7fa')};
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#333')};
    transition: background-color 0.5s ease, font-weight 0.5s ease;

    &:hover {
      background-color: #fff;
    }

    &:checked {
     background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#f5f7fa')};
     color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#333')};
     transition: background-color 0.5s ease, font-weight 0.5s ease;
    }
  }
`;

function FilterBy({ handleChangeFilterBy }) {
  const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);

    return(
        <div>
            <h3>Status</h3>
            <StyledSelect $isDarkMode={isDarkMode} onChange={(e) => handleChangeFilterBy(e)}>
                <option $isDarkMode={isDarkMode} value="All">All</option>
                <option $isDarkMode={isDarkMode} value="Pending">Pending</option>
                <option $isDarkMode={isDarkMode} value="Done">Done</option>
            </StyledSelect>
        </div>
     );
}

export default FilterBy;