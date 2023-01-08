import React, {useState} from 'react';
import styles from './Quote.module.css';
import quotes from '../Data';

const Quote = () => {
    const [pos,setPos] = useState(0);
    const [bgColor, setBgColor] = useState(0);
    function handleClick(){
        let newpos = Math.floor((Math.random()* quotes.length));
        setPos(newpos);
        setBgColor((bgColor+1)%3);
    }

    const bgcolors = ["#313A49","#B46823","#572525"];

    return (
        <div className={styles.container} style={{backgroundColor: bgcolors[bgColor]}}>
            <div className={styles.title}>
                ADVICE #117
            </div>
            <div className={styles.quote}>
                "{quotes[pos]}"
            </div>
            <hr className={styles.hr}></hr>
            <div className={styles.dice} onClick={handleClick}>
            <i className="fa fa-arrows-alt" style={{fontSize:26, color:"red"}}></i>
            </div>
        </div>
    );
};

export default Quote;