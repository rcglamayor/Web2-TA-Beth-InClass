import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

/* Components ---------------------------*/
import Bids from './Bids/Bids.jsx';

const BidManager = () => {

    const { bidManager: { current: { bids } } } = useSelector((state) => state);

    return (
        <BidManagerStyled className='BidManager'>
            BidManager

            {
                bids && bids.length > 0
                ? <Bids bids={ bids } />
                : 'Currently you have no lots in your Bid Manager.'
            }
            
        </BidManagerStyled>
    );
}

export default BidManager;

const BidManagerStyled = styled.div`
    
`;