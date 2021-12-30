import React from "react";
import Styles from './flyer.module.scss';

const Flyer = ()=>{
    return(
        <>
            
            <div className={`${Styles.flyer}`}>
                <div className={Styles.topflyer}>
                    <div className={Styles.imgflyer}>
                        <img src="EWAY_FLYERICON_LEFT.webp" alt="img"/>
                    </div>
                    <div className={Styles.textflyer}>
                        <h4>Monthly Flyer</h4>
                        <p>Get the latest deals on the products your business needs.</p>
                        <a href="#">VIEW NOW</a>
                    </div>
                </div>
                <div className={Styles.topflyer}>
                    <div className={Styles.imgflyer}>
                        <img src="EWAY_PUBLICATIONICON_RIGHT.webp" alt="img"/>
                    </div>
                    <div className={Styles.textflyer}>
                        <h4>Monthly Flyer</h4>
                        <p>Get the latest deals on the products your business needs.</p>
                        <a href="#">VIEW NOW</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Flyer;


// const flyerItem = [
//     {

//     }
// ];