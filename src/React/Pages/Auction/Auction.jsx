import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* Component ---------------------------*/
import Template from '../../Shared/Template.jsx';
import AuctionNav from './AuctionNav.jsx';
import BidManager from './BidManager/BidManager.jsx';
import Lots from './Lots/Lots.jsx';

const Auction = () => {
    const { user } = useSelector((state) => state);

    return (
        <AuctionStyled className='Auction'>
            <Template title='Auction'>
                {
                    user.isLoggedIn &&
                    <AuctionNav />
                }
                <Switch>
                    <Route path='/auction/bids' component={ BidManager } />
                    <Route path='/auction' component={ Lots } exact />
                </Switch>
            </Template> 
        </AuctionStyled>
    );
}

export default Auction;

const AuctionStyled = styled.div`
    
`;