import React from 'react'
import styles from './Loader.module.css';

//Loader Component
const Loader = () => {
 
    return (

        <div className={styles.loadercontainer}>
            <div className={styles.loader}></div>
        </div>

    )
}

export default Loader