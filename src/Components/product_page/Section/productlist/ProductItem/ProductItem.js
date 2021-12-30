import React from "react";
import Styles from './productitem.module.scss';

const ProductItem = () => {
    return (
        <>
              <div className={Styles.productItem}>
                            <div className={Styles.productImg}>
                                <img src="product_img1" />
                            </div>
                            <div className={Styles.product_detail}>
                                <div>
                                    <span>Staples Copy Paper - 20 lb. - 8.5" x 11" - White - 5000 Sheets</span>
                                </div>
                                <div>
                                    <span>Brand:Staples</span>
                                </div>
                                <div> <span>Item#:STP14336</span></div>
                                <div>
                                    <span><i class="fa fa-book-open"></i></span>
                                </div>

                            </div>
                            <div className={Styles.product_content}>
                                <p>Login for pricing and availability information</p>
                            </div>

                        </div>
        </>
        )
    }
    
    export default ProductItem;