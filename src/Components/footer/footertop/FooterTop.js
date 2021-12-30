import React from "react";
import Styles from "./footertop.module.scss";

const FooterTop = (props) => {
    return (
        <>
        <div className={Styles.container}>
            <div className={`${Styles.footertop}`}>
                {
                    footerItem.map((footvalue) => {
                        return (
                            <>
                                <div className={Styles.footmenu}>
                                    <h3>{footvalue.heading}</h3>
                                    <ul>
                                        <li>
                                            <a href="#">{footvalue.links_1}</a>
                                        </li>
                                        <li>
                                            <a href="#">{footvalue.links_2}</a>
                                        </li>
                                        <li>
                                            <a href="#">{footvalue.links_3}</a>
                                        </li>
                                        <li>
                                            <a href="#">{footvalue.links_4}</a>
                                        </li>
                                        <li>
                                            <a href="#">{footvalue.links_5}</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </>
                        )
                    })

                }
            </div>
                
            </div>

            <div className={Styles.foot_top}>
                <div className={Styles.footmid}>
                    <div className={Styles.miditem}>
                        <h5>Join us on</h5>
                        <div className={Styles.socialMedia}>
                        <i class="fa fa-linkedin"></i>
                        <i class="fa fa-twitter-square"></i>
                        <i class="fa fa-facebook-square"></i>
                        <i class="fa fa-youtube"></i>
                        <i class="fa fa-instagram"></i>
                        </div>
                    </div>
                    <div className={Styles.midImg} >
                        <img src="bullfrogpower.svg" alt="img"></img>
                        <img src="accessibility-logo.svg" alt="img"></img>

                    </div>
                </div>
            </div>
            <div className={Styles.copyright}>
                <div>
                    <p>© Copyright 2021 Staples Professional Inc. All rights reserved.</p>
                    <ul>
                        <li className={Styles.listA}>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy Notice</a>
                        </li>
                        <li>
                            <a href="#">Staples Professional</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
    
}

export default FooterTop;

const footerItem = [
    {
        heading:'Customer Service',
        links_1: 'Help Center',
        links_2: 'Contact Us',
        links_3: 'Recall Information',
        links_4: 'Safety Data Sheets',


    },
    {
        heading:'Corporate Info',
        links_1: 'Staples Professional Overview',
        links_2: 'Industries Served',
        links_3: 'Blog',
        links_4:'Our Brands'
    },
    {
        heading:'Staples Corporate Solutions',
        links_1: 'Office Products',
        links_2: 'Technology Products',
        links_3: 'Furniture',
        links_4:'Facilities',
        links_5:'Promotional Products'
    },
    {
        heading:'New Customers',
        links_1: 'Become a Customer',
        links_2: 'Govt. Customers',
        links_3: 'Membership',
       
    },

]