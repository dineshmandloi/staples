import React from "react";
import Styles from '../topsection/topsection.module.scss';

const Shipping = () => {
    return (
        <>
            <div className={`${Styles.topsection}`}>
                <div className={`${Styles.col_half} ${Styles.topsecItem}`}>
                    <img src="Banner_BoxFinder_Left_EN.webp" alt="heroimg"></img>
                </div>
                <div className={`${Styles.rightText} ${Styles.topsecItem}`}>
                    
                  <h2>new! <strong>box finder tool.</strong></h2>
                    <p> Find the right box for your pack+ship needs.</p>
                    <a href="#">TRY NOW &nbsp;<i class="fa fa-caret-right"></i></a>
                </div>
            </div>
        </>
    )
}
export default Shipping;