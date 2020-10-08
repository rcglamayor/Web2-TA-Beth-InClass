import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Template from '../Shared/Template.jsx';

const Auction = () => {

    return (
        <AuctionStyled className='Auction'>
            <Template title='Auction'>
            Auction
            </Template> 
        </AuctionStyled>
    );
}

export default Auction;

const AuctionStyled = styled.div`
    
`;