import React from "react";
import Styles from './heading.module.scss';


function Heading(props){
    return(
        <>
            <h2 className={Styles.heading}>{props.heading_text}</h2>
        </>
    )
}

export default Heading;
