import styles from './FilterBy.module.scss';

function FilterBy({ handleChangeFilterBy, filterBy}) {

    return(
        <div className={styles.radioInputs}>
            <label className={styles.radio}>
                <input 
                   className={styles.filterInput}
                   type="radio" 
                   name="All" 
                   onChange={(e) => handleChangeFilterBy(e)} 
                   value="All"
                   checked={filterBy === "All"}
                />
                <span className={styles.name}>All</span>
            </label>
            <label className={styles.radio}>
                <input 
                   className={styles.filterInput}
                   type="radio" 
                   name="Pending" 
                   onChange={(e) => handleChangeFilterBy(e)} 
                   value="Pending"
                   checked={filterBy === "Pending"}
                />
                <span className={styles.name}>Pending</span>
            </label>
                
            <label className={styles.radio}>
                <input 
                   className={styles.filterInput}
                   type="radio" 
                   name="Done" 
                   onChange={(e) => handleChangeFilterBy(e)} 
                   value="Done"
                   checked={filterBy === "Done"}
                />
                <span className={styles.name}>Done</span>
            </label>
        </div>
    );
}

export default FilterBy;