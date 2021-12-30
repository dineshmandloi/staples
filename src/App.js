import React from 'react'
import '../src/App.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Header from './Components/header/Header';
import Menubar from './Components/header/menubar/Menubar';
import Banner from './Components/Banner/Banner';
import Section from './Components/Section/Section';
import Footer from './Components/footer/Footer';
import ProductPage from './Components/product_page/ProductPage';
const App = () => {
    return (
        <>

            <Header />

            <Menubar />
            <Banner />
            <Section />
            <Footer />


            {/* product ppage.......... */}

            <ProductPage />
        </>
    )
}


export default App;