import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${({ $isdarkmode, $isDone }) => ($isdarkmode ? $isDone ? '#fc7d0b' : '#444' : $isDone ? '#99ff99' : '#f5f7fa')};
  color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#333')};
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
    background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#444' : '#f5f7fa')};
    color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#333')};
    transition: background-color 0.5s ease, font-weight 0.5s ease;

    &:hover {
      background-color: #fff;
    }

    &:checked {
     background-color: ${({ $isdarkmode }) => ($isdarkmode ? '#444' : '#f5f7fa')};
     color: ${({ $isdarkmode }) => ($isdarkmode ? '#fff' : '#333')};
     transition: background-color 0.5s ease, font-weight 0.5s ease;
    }
  }
`;

function FilterBy({ handleChangeFilterBy }) {
  const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);

    return(
        <div>
            <h3>Status</h3>
            <StyledSelect defaultValue='All' $isdarkmode={isDarkMode ? 'true' : undefined} onChange={(e) => handleChangeFilterBy(e)}>
                <option $isdarkmode={isDarkMode ? 'true' : undefined} value="All">All</option>
                <option $isdarkmode={isDarkMode ? 'true' : undefined} value="Pending">Pending</option>
                <option $isdarkmode={isDarkMode ? 'true' : undefined} value="Done">Done</option>
            </StyledSelect>
        </div>
     );
}

export default FilterBy;