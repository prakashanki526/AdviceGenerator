import React,{useState} from 'react';
import styles from './Page.module.css';
import Quote from '../Quote';
import quotes from '../../Data';

const Page = () => {
    const [pos,setPos] = useState(0);
    const [bgColor, setBgColor] = useState(0);
    function handleClick(){
        setPos((pos+1)%quotes.length);
        setBgColor((bgColor+1)%4);
    }

    const bgcolors = ["#001a33","#ff9900","#330000","#006699"];

    return (
        <div className={styles.body} style={{backgroundColor:bgcolors[bgColor]}}>
            <Quote bg={bgColor} pos={pos}/>
            <div className={styles.diceContainer} onClick={handleClick}>
                {/* <i className="fa fa-arrows-alt" style={{fontSize:26, color:"red"}}></i> */}

                <svg className={styles.dice} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </div>
        </div>
    );
};

export default Page;