import React from "react";
import Styles from './productsort.module.scss';

const ProductSort = () => {
    return (
        <>
        <div className={Styles.container}>
            <div className={Styles.productsort}>
                <div className={Styles.show_item}>
                    <span>Showing 4697 items</span>
                </div>
                <div className={Styles.sort_gridview}>
                <div className={Styles.sort}>
                    <select className="select">
                        <option value="0">Sort</option>
                        <option value="1">dummy content</option>
                        <option value="2">dummy content</option>
                        <option value="3">dummy content</option>
                        <option value="4">dummy content</option>

                    </select>
                </div>
                <div className={Styles.list_grid_view}>
                    <button class="btn active" onclick="gridView()"><i class="fa fa-th-large"></i></button>
                    <button class="btn" onclick="listView()"><i class="fa fa-bars"></i> </button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ProductSort;