import FilterBy from './FilterBy/FilterBy';
import SortBy from './SortBy/SortBy';

import styles from './SortByAndFiltreBy.module.scss';

function SortByAndFilterBy({ handleChangeFilterBy, sortBy, handleChangeSortBy, filterBy }) {
    return(
        <div className={styles.sortByAndFilterBy}>
            <FilterBy
              filterBy={filterBy}
              handleChangeFilterBy={handleChangeFilterBy}
            />
            <SortBy 
              sortBy={sortBy} 
              handleChangeSortBy={handleChangeSortBy}
            />
        </div>
    );
}

export default SortByAndFilterBy