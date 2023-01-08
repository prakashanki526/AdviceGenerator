import React from 'react';
import styles from './Quote.module.css';
import quotes from '../Data';

const Quote = (props) => {
    const bgcolors = ["#313A49","#B46823","#572525","#006666"];

    return (
        <div className={styles.container} style={{backgroundColor: bgcolors[props.bg]}}>
            <div className={styles.title}>
                ADVICE #{Math.floor(Math.random()*1000)}
            </div>
            <div className={styles.quote}>
                "{quotes[props.pos]}"
            </div>
            <hr className={styles.hr}></hr>
        </div>
    );
};

export default Quote;