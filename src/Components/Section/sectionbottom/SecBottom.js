import React from "react";
import Styles from '../topsection/topsection.module.scss';
import Style from './secbottom.module.scss';
const SecBottom = () => {
    return (
        <>
            <div className={`${Styles.topsection} ${Style.secbottom}`}>
                
                    {
                        imgItem.map((imgvalue) => {
                            return (
                                <>
                                    <div className={`${Style.secbottom_Item} ${Styles.topsecItem}`}>
                                        <img src={imgvalue.imgsrc} alt="heroimg"></img>
                                    </div>
                                    <div className={Style.secbottom_Text}>
                                        <p>{imgvalue.para}</p>
                                        <a href="#">{imgvalue.links}</a>
                                    </div>
                                </>
                            )
                        })
                    }

                
            </div>
        </>
    )
}
export default SecBottom;

const imgItem = [
    {
        imgsrc: "Business_Update_EN.webp",
        para:'Staples Professional is here to serve you. Read our latest updates.',
        links:'learn more'
    },
   
]