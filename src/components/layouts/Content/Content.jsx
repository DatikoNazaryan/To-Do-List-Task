import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import TaskList from '../../features/TaskList/TaskList';
import SortByAndFilterBy from '../../features/SortByAndFiltreBy/SortByAndFiltreBy';
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';

import styles from './Content.module.scss';

function Content() {
    const [ sortBy, setSortBy ] = useState("Date");
    const [ filterBy, setFilterBy ] = useState("All");
    const [ visible, setVisible ] = useState(false);

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

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      <Header/>
      <div className={styles.container}>
        <main className={styles.main}>
          <SortByAndFilterBy
            sortBy={sortBy}
            filterBy={filterBy}
            handleChangeSortBy={handleChangeSortBy}
            handleChangeFilterBy={handleChangeFilterBy}
          />
          <TaskList
            sortBy={sortBy}
            filterBy={filterBy}
          />
          {
            visible && <ScrollToTop visible={visible} />
          }
        </main>
      </div>
    </>
  );
}

export default Content;
