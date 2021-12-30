import React  from 'react';
import TopSection from './topsection/TopSection'
import Styles from './section.module.scss'
import Flyer from './Flyer/Flyer';
import Product from './products/Product';
import Shipping from './Shipping/Shipping';
import SectionMid from './Sectionmiddle/SectionMid'
import Brands from './brands/Brands';
import SecBottom from './sectionbottom/SecBottom';

function Section(){
    return(
        <section className={Styles.section}>
            <div className={Styles.container}>
                <TopSection
                imgsrc1 = "ReimaginedSpacesCampaign_static_eway_EN.webp"

                imgsrc2 = "ReimaginedSpacesCampaign_static-eway_EN_R2.webp"

                />
                {/* <TopSection
                 imgsrc1 = "Banner_Calendar_Left_EN.webp"
                 imgsrc2 = "Banner_Calendar_Right_EN.webp"

                /> */}
                <Flyer/>
                <Product/>
                <Shipping/>
                <SectionMid/>
                <Brands/>
                <SecBottom/>
                </div>
        </section>
    )
}

export default Section;