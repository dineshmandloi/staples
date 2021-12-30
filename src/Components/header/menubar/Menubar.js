import React from "react";
import Styles from './menubar.module.scss';


const Menubar = (props) => {
    return (
        <>
            <div className={Styles.menubar}>
            <span className={Styles.barBtn}><i className="fa fa-bars"></i></span>

                <ul>
                    {
                        menuItem.map((menuvalue)=>{
                                return(
                                    <>
                                        <li>
                                            <a href="#">
                                                {menuvalue.listText}<i className='fa fa-angle-down'></i>
                                            </a>
                                        </li>   
                                    </>
                                )
                        })
                    }
                   
                </ul>

            </div>
        </>
    )
}

export default  Menubar;

const menuItem = [
   { listText:'products'},
    {listText:'services & solutions'},
    {listText:'brands'},
    {listText:'deals'},
    {listText:'piblications'},
   { listText:'become a customer'}
]