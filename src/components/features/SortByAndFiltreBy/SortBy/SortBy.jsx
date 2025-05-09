import styles from './SortBy.module.scss';

function SortBy({sortBy, handleChangeSortBy}) {
    return (
        <div className={styles.sortRadioInputs}>
            <label className={styles.sortRadio}>
                <input
                   className={sortBy === "Date" ? styles.sotrInput : null}
                   type="radio" 
                   name="Date" 
                   onChange={(e) => handleChangeSortBy(e)} 
                   value="Date"
                   checked={sortBy === "Date"}
                />
                <span className={styles.name}>Date</span>
            </label>
            <label className={styles.sortRadio}>
                <input 
                   className={sortBy === "Alphabetically" ? styles.sotrInput : null}
                   type="radio" 
                   name="Alphabetically" 
                   onChange={(e) => handleChangeSortBy(e)} 
                   value="Alphabetically"
                   checked={sortBy === "Alphabetically"}
                />
                <span className={styles.name}>Alphabetically</span>
            </label>
        </div>
    );
}

export default SortBy;