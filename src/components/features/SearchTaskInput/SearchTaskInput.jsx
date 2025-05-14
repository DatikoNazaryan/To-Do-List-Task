import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaSearch } from 'react-icons/fa';
import { searchTask } from '../../../store/slices/taskSlice';
import useDebounce from './debounce';

import styled from 'styled-components';

const SearchContainer = styled.form`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 15px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#f5f7fa')};
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#333')};

  &:hover {
    border-color: #EEE;
  }

  &:focus {
    border-color: #EEE;
    box-shadow: 0 0 5px #EEE;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #aaa;
`;

function SearchBar () {
  const dispatch = useDispatch();
    const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);
    const [searchVal, setSearchVal] = useState("");
    const [debounceVal, setDebounceVal] = useState("");

    const debounceValue = useDebounce(searchVal, 1000);

    useEffect(() => {
      setDebounceVal(searchVal);
      dispatch(searchTask(debounceVal));
    }, [debounceValue, debounceVal]);

    const onChangeSearchTask = (e) => {
        setSearchVal(e.target.value);
    };

  return (
    <SearchContainer>
      <SearchInput onChange={(e) => onChangeSearchTask(e)}  $isDarkMode={isDarkMode} type="text" placeholder="Search..." />
      <SearchIcon />
    </SearchContainer>
  );
};

export default SearchBar;
