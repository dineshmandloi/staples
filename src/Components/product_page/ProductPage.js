import React from "react";
import Breadcrumb from "./Breadcrumbs/Breadcrumb";
import Styles from './productpage.module.scss';
import ProductList from "./Section/productlist/ProductList";
import ProductSort from "./Section/productsort/ProductSort";


const ProductPage = () =>{
return(
    <>
         <Breadcrumb/>
         <ProductSort/>
         <ProductList/>
    </>
)
}

export default ProductPage;