import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* Components ---------------------------*/
import Header from './Shared/Header.jsx';
import Nav from './Shared/Nav.jsx';
import Content from './Shared/Content.jsx';
import Footer from './Shared/Footer.jsx';


const Main = () => {

    return (
        <div className='Main'>
            <BrowserRouter>
                <h1>In Class</h1>
                <Header />
                <Nav />
                <Content />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default Main;