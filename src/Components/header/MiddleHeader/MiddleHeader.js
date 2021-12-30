import React from "react";
import Styles from './middleheader.module.scss'


const MiddleHeader = (props) => {
    return (
        <>
        
            <div className={Styles.middleheader}>
                <div className={Styles.logo}>
                    <img src="logo-en.svg" alt="logo img"></img>
                </div>
            <div className={Styles.searchTop}>
                <div className={Styles.searchbar}>
                    <div className={Styles.search}>
                        <input type="text" placeholder="Search for all your business needs" />
                        <button className={`${Styles.searchBtn} ${props.icon}`}></button>
                    </div>
                    <div className={Styles.inkAndtoner}>
                        <a href="#">
                            <i className="fa fa-drupal"></i>
                            Ink &amp; Toner
                        </a>
                    </div>
                </div>
                </div>
                <div className={Styles.supportmenu}>
                    <ul>
                        
                            {
                                supportArr.map((svalue)=>{
                                    return(
                                        
                                        <li>
                                            <button>
                                                <i className={svalue.icon}></i>
                                                <div className={Styles.icontext}>{svalue.text}</div>
                                            </button>
                                        </li>
                                        
                                    )
                                })
                            }
                       
                    </ul>
                </div>
            </div>
            
        </>
    )
}
export default MiddleHeader;

// const 

const supportArr = [
    {
        icon:'fa fa-user',
        text:'Sign in'
    },
    {
        icon:'fa fa-comment',
        text:'Help'
    },
    {
        icon:'fa fa-shopping-cart',
        text:'Cart'
    }
];