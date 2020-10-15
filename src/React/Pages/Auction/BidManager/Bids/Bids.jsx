import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Bid from './Bid.jsx';

const Bids = ({bids}) => {

    return (
        <BidsStyled className='Bids'>
            {
                bids.map((bid, idx) => {
                    return <Bid key={ idx } bid={ bid } />
                })
            } 
        </BidsStyled>
    );
}

export default Bids;

const BidsStyled = styled.div`
    
`;