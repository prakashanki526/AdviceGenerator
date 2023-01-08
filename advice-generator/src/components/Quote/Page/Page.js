import React,{useState} from 'react';
import styles from './Page.module.css';
import Quote from '../Quote';
import quotes from '../../Data';

const Page = () => {
    const [pos,setPos] = useState(0);
    const [bgColor, setBgColor] = useState(0);
    function handleClick(){
        setPos((pos+1)%quotes.length);
        setBgColor((bgColor+1)%3);
    }

    const bgcolors = ["#001a33","#ff9900","#330000"];

    return (
        <div className={styles.body} style={{backgroundColor:bgcolors[bgColor]}}>
            <Quote bg={bgColor} pos={pos}/>
            <div className={styles.dice} onClick={handleClick}>
                <i className="fa fa-arrows-alt" style={{fontSize:26, color:"red"}}></i>
            </div>
        </div>
    );
};

export default Page;