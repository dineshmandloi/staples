import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import Styles from './productlist.module.scss';

const ProductList = () => {
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.productlist}>
                    <div className={Styles.product_catagory}>
                        <div className={Styles.sort}>
                            <select className="select">
                                <option value="0">Category</option>
                                <option value="1">dummy content</option>
                                <option value="2">dummy content</option>
                                <option value="3">dummy content</option>
                                <option value="4">dummy content</option>

                            </select>
                        </div>
                        <div className={Styles.sort}>
                            <select className="select">
                                <option value="0">Brands</option>
                                <option value="1">dummy content</option>
                                <option value="2">dummy content</option>
                                <option value="3">dummy content</option>
                                <option value="4">dummy content</option>

                            </select>
                        </div>
                    </div>

                    <div className={Styles.productView}>
                        <div className={Styles.productViewTop}>
                            <ul>
                                <li>
                                    <div className={Styles.chip}>
                                        Office Supplies
                                        <span onclick="this.parentElement.style.display='none'">&times;</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={Styles.chip}>
                                        Office Supplies
                                        <span onclick="this.parentElement.style.display='none'">&times;</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={Styles.chip}>
                                        Office Supplies
                                        <span onclick="this.parentElement.style.display='none'">&times;</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">Clear all</a>
                                </li>
                            </ul>
                        </div>

                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductList;