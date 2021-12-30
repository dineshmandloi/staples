import React from "react";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import Styles from './header.module.scss';
import TopHeader from "./topheader/TopHeader";
const Header = () =>{
    return(
        <>
        <header>
            <div className={Styles.hTop}>
            <TopHeader/>
            </div>
            
            <div className={Styles.middleTop}>
            <div className={`${Styles.container} ${Styles.paddingZero}`}>
             <MiddleHeader icon="fa fa-search"/>
             </div>
             </div>
             
             
        </header>
        </>
    )
}
export  default Header;