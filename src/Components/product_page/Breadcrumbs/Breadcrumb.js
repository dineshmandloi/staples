import React from "react";
import Styles from './breadcrumb.module.scss';

const Breadcrumb = () => {
    return (
        <>
            <div className={Styles.container}>
            <div className={Styles.breadcrumb}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Office Supplies</a></li>
                    <li><a href="#">Paper</a></li>
                    
                </ul>
            </div>
            </div>
        </>
    )
}

export default Breadcrumb;