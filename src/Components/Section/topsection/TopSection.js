import React from "react";
import Styles from './topsection.module.scss';

const TopSection = (props) => {
    return (
        <>
            <div className={`${Styles.topsection}`}>
                <div className={`${Styles.col_half} ${Styles.topsecItem}`}>
                    <img src={props.imgsrc1} alt="heroimg"></img>
                </div>
                <div className={`${Styles.rightText} ${Styles.topsecItem}`}>
                    
                    <img src="logotext.png" alt="heroimg"></img>
                    <p>Reimagine your office with Workplace Design Services </p>
                    <a href="#">LEARN MORE  &nbsp;<i class="fa fa-caret-right"></i></a>
                </div>
            </div>
            <div className={`${Styles.topsection}`}>
                <div className={`${Styles.col_half} ${Styles.topsecItem}`}>
                    <img src="Banner_Calendar_Left_EN.webp" alt="heroimg"></img>
                </div>
                <div className={`${Styles.rightText} ${Styles.topsecItem}`}>
                    
                  <h2>2022 <strong> calendars and planners guide</strong> is here</h2>
                    <p> Utilize time management tools to stay on track and improve organization within your team </p>
                    <a href="#">VIEW  FLYER  &nbsp;<i class="fa fa-caret-right"></i></a>
                </div>
            </div>
        </>
    )
}
export default TopSection;

// const imgItem = [
//     {
//         imgsrc: "ReimaginedSpacesCampaign_static_eway_EN.webp",
//     },
//     {
//         imgsrc: "ReimaginedSpacesCampaign_static-eway_EN_R2.webp",
//     },
//     // {
//     //     imgsrc: "Banner_Calendar_Left_EN.webp",
//     // },
//     // {
//     //     imgsrc: "Banner_Calendar_Right_EN.webp",
//     // }
// ]