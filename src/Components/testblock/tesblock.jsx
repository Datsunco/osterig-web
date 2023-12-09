import React from 'react';
import styles from "./testblock.module.css"


const tesblock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.firstchild}>

            </div>
            <div className={styles.secchild}>
                <h className={styles.text}>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </h>
            </div>
            <div className={styles.thirdchild}>
                
            </div>
        </div>
    );
};

export default tesblock;