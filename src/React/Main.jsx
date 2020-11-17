import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';

/* Scripts ---------------------------*/
import * as AuctionActions from 'Redux/auction/actions.js';

/* Components ---------------------------*/
import Header from './Shared/Header.jsx';
import Nav from './Shared/Nav.jsx';
import Content from './Shared/Content.jsx';
import Footer from './Shared/Footer.jsx';


const Main = () => {

    const dispatch = useDispatch();

    const { auction } = useSelector((state) => state);

    useEffect(() => {
        dispatch(AuctionActions.loadAuctions());
    }, [dispatch]);

    if (_.isEmpty(auction.current)) { return 'Preloading...' }

    console.log('Main');

    return (
        <MainStyled className='Main'>
            <BrowserRouter>
                <Header />
                <Nav />
                <Content />
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