import { useSelector } from 'react-redux';
import { StyledSelect } from '../FilterBy/FilterBy';

import { Radio, HiddenRadio, RadioItem, RadioInputs, Sort } from './SortByStyled';

function SortBy({sortBy, handleChangeSortBy, handleChangeSortTo}) {
    const isDarkMode = useSelector(store => store.isDarkTheme.isDarkThemeActive);

    return (
        <Sort>
            <div>
                <h3>Sort By</h3>
                <StyledSelect 
                   $isdarkmode={isDarkMode ? 'true' : undefined} 
                   onChange={(e) => handleChangeSortBy(e)}
                   defaultValue="Date"
                >
                  <option value="Date">Date</option>
                  <option value="Alphabetically">Alphabetically</option>
                </StyledSelect>
           </div>
                <RadioInputs $isdarkmode={isDarkMode ? 'true' : undefined}>
                  <Radio>
                    <HiddenRadio
                      type="radio"
                      name="asc"
                      value="asc"
                      checked={sortBy === "asc"}
                      onChange={(e) => handleChangeSortTo(e)} 
                    />
                    <RadioItem $isdarkmode={isDarkMode ? 'true' : undefined} selected={sortBy === "asc"}>Asc</RadioItem>
                  </Radio>
                  <Radio>
                    <HiddenRadio
                      type="radio"
                      name="desc"
                      value="desc"
                      checked={sortBy === "desc"}
                      onChange={(e) => handleChangeSortTo(e)} 
                    />
                    <RadioItem $isdarkmode={isDarkMode ? 'true' : undefined} selected={sortBy === "desc"}>Desc</RadioItem>
                  </Radio>
                </RadioInputs>
        </Sort>
    );
}

export default SortBy;