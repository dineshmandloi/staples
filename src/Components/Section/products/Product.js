import React from "react";
import Styles from './product.module.scss';
import Heading from "../../heading/Heading";

const Product = () => {
    return (
        <>
            <Heading heading_text="Explore our Products"/>
            <div className={`${Styles.product}`}>
                {
                    productItem.map((pvalue) => {
                        return (
                            <>
                                <div className={`${Styles.productItem}`}>
                                    <div className={Styles.product_img}>
                                    <img src={pvalue.imgsrc} alt="product img "></img>
                                    </div>
                                   
                                    <a href="#">{pvalue.links}</a>
                                </div>
                            </>
                        )
                    })


                    
                }
            </div>
        </>
    )
}

export default Product;

const productItem = [
    {
        imgsrc: 'product-1',
        links: 'paper'
    },
    {
        imgsrc: 'product-2',
        links: 'Ink & Toner '
    },
    {
        imgsrc: 'product-3',
        links: 'Technology'
    },
    {
        imgsrc: 'product-4',
        links: 'Furniture'
    },
    {
        imgsrc: 'product-5',
        links: 'Cleaning & Janitorial'
    },
    {
        imgsrc: 'product-6',
        links: 'Pack & Ship '
    },
    {
        imgsrc: 'product-7',
        links: 'Breakroom'
    },
    {
        imgsrc: 'product-8',
        links: 'Business Essentials'
    }
    
]