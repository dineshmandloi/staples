import React from "react";
import Styles from  './topheader.module.scss';


const TopHeader = () =>{

    return(
        <>
            <div className={`${Styles.topheader}`}>
                <div>
                <select>
                    <option value="en">EN</option>
                    <option value="saab">FR</option>
                </select>
                </div>
                <div>
                    <span>Live chat</span>
                </div>
            </div>
        </>
    )
   
}

export default TopHeader;