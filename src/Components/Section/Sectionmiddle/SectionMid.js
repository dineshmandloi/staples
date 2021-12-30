import React from "react";
import Styles from '../topsection/topsection.module.scss';
import Style from './sectionmid.module.scss'

const SectionMid = () => {
    return (
        <>
            <div className={`${Styles.topsection} ${Style.midlesection}`}>
                <div className={`${Style.sectionmid} `}>
                    <div className={Style.sectionmid_img}>
                    <div className={Style.color_overlay}></div>
                        <h2>work from <strong>anywhere</strong></h2>
                       <ul>
                           <li>
                               <a href="#">bemobile</a>
                           </li>
                           <li>
                               <a href="#">stayconnected</a>
                           </li>
                           <li>
                               <a href="#">promotewellness</a>
                           </li>
                           <li>
                               <a href="#">keeporganized</a>
                           </li>
                           <li>
                               <a href="#">reimaginedspaces</a>
                           </li>
                       </ul>
                    </div>
                    <div className={Style.imgText}>
                        <p>The world of work has changed, and we’re keeping pace with solutions to keep you productive in every environment.</p>
                        <a href="#">view now</a>
                    </div>
                </div>
                <div className={`${Style.sectionmid} `}>
                    <div className={Style.sectionmid_img}>
                    <div className={Style.color_overlay}></div>
                        <h2><strong>CLEAN, SAFE + WELL</strong></h2>
                   
                    </div>
                    <div className={Style.imgText}>
                        <p>The world of work has changed, and we’re keeping pace with solutions to keep you productive in every environment.</p>
                        <a href="#">view now</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMid;

// const imgItem = [
//     {
//         imgsrc: "EWAY_WFA_LOWER_BANNER_EN.webp",
//         para: "The world of work has changed, and we’re keeping pace with solutions to keep you productive in every environment.",
//         links: "view now"
//     },
//     {
//         imgsrc: "EWAY_WFA_LOWER_BANNER_EN.webp",
//         para: "Solutions to keep a clean business environment to ensure the safety and wellness of employees and customers.",
//         links: "view now"
//     },
// ]