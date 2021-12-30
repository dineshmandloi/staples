import React from 'react';
import Style from './brands.module.scss'
import Styles from '../topsection/topsection.module.scss';
import Heading from '../../heading/Heading';
const Brands = () =>{
    return(
        <>
        <Heading heading_text="Staples Exclusive. Meet the Brands."/>
             
              <div className={`${Style.brands}`}>
              {
                        imgItem.map((imgvalue) => {
                            return (
                                <>
                                    <div className={`${Styles.col_half} ${Styles.topsecItem}`}>
                                        <img src={imgvalue.imgsrc} alt="heroimg"></img>
                                    </div>
                                </>
                            )
                        })
                    }
              </div>
        </>
    )
}
export default Brands;

const imgItem = [
    {
        imgsrc:'EWAY_TRU_RED (1).png'
    },
    {
        imgsrc:'EWAY_NXT_TECHNOLOGIES.webp'
    },
    {
        imgsrc:'EWAY_TRU_RED (1).png'
    },
    {
        imgsrc:'EWAY_NXT_TECHNOLOGIES.webp'
    },
    {
        imgsrc:'EWAY_TRU_RED (1).png'
    },
    {
        imgsrc:'EWAY_NXT_TECHNOLOGIES.webp'
    },
    
];