import FilterBy from './FilterBy/FilterBy';
import SortBy from './SortBy/SortBy';

import styled from 'styled-components';

const SortByAndFilterByDiv = styled.div`
    margin: 20px auto 40px;
    width: 65%;
    display: flex;
    justify-content: space-between;
`;

function SortByAndFilterBy({ handleChangeFilterBy, sortBy, handleChangeSortBy, handleChangeSortTo }) {
    return(
        <SortByAndFilterByDiv>
            <FilterBy
              handleChangeFilterBy={handleChangeFilterBy}
            />
            <SortBy 
              sortBy={sortBy} 
              handleChangeSortBy={handleChangeSortBy}
              handleChangeSortTo={handleChangeSortTo}
            />
        </SortByAndFilterByDiv>
    );
}

export default SortByAndFilterBy