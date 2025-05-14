import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import TaskList from '../../features/TaskList/TaskList';
import SortByAndFilterBy from '../../features/SortByAndFiltreBy/SortByAndFiltreBy';
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';
import SearchBar from '../../features/SearchTaskInput/SearchTaskInput';

import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  margin-top: 100px;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  max-width: 1190px;
  margin: 0 auto;

  /* Responsive Design for smaller screens */
  @media (max-width: 768px) {
    padding: 0 5px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

function Content() {
    const [ sortBy, setSortBy ] = useState("Date");
    const [ filterBy, setFilterBy ] = useState("All");
    const [ visible, setVisible ] = useState(false);
    const [ sortTo, setSortTo ] = useState('asc');

  const toggleVisible = () => {
    if (window.scrollY > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
    
    const handleChangeSortBy = (e) => {
      setSortBy(e.target.value);
    };

    const handleChangeFilterBy = (e) => {
      setFilterBy(e.target.value);
    };

    const handleChangeSortTo =(e) => {
      setSortTo(e.target.value);
    }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      <Header/>
      <Main>
      <SearchBar />
      <Container>
        <SortByAndFilterBy
            sortBy={sortTo}
            handleChangeSortBy={handleChangeSortBy}
            handleChangeFilterBy={handleChangeFilterBy}
            handleChangeSortTo={handleChangeSortTo}
          />
          <TaskList
            sortBy={sortBy}
            filterBy={filterBy}
            sortTo={sortTo}
          />
          {
            visible && <ScrollToTop visible={visible} />
          }
      </Container>
      </Main>
    </>
  );
}

export default Content;
