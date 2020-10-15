import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Component ---------------------------*/
import Template from '../../Shared/Template.jsx';
import AuctionNav from './AuctionNav.jsx';
import BidManager from './BidManager/BidManager.jsx';
import Lots from './Lots/Lots.jsx';

const Auction = () => {

    return (
        <AuctionStyled className='Auction'>
            <Template title='Auction'>
                <AuctionNav />
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