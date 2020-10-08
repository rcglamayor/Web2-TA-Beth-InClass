import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Data ---------------------------*/
import auction from '../common/static_data/auction.js';

/* Components ---------------------------*/
import Header from './Shared/Header.jsx';
import Nav from './Shared/Nav.jsx';
import Content from './Shared/Content.jsx';
import Footer from './Shared/Footer.jsx';


const Main = () => {

    console.log('Main auction', auction);

    return (
        <MainStyled className='Main'>
            <BrowserRouter>
                <Header />
                <Nav />
                <Content auction={ auction }/>
                <Footer />
            </BrowserRouter>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div `
    background-color: #fff;
    max-width: 1200px;
    width: 100%;
    margin: auto;
    box-shadow: 0px 0px 10px rgba(0,0,0,.2);
`;