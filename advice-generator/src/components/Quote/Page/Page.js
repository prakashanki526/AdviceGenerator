import React from 'react';
import styles from './Page.module.css';
import Quote from '../Quote';

const Page = () => {
    return (
        <div className={styles.body}>
            <Quote />
        </div>
    );
};

export default Page;