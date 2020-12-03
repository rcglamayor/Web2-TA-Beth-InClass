import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

/* Scripts ---------------------------*/
import * as BidManagerActions from 'Redux/bidManager/actions.js';

/* Components ---------------------------*/
import Bid from './Bid.jsx';
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const Bids = ({bids}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmitBids = () => {
        dispatch(BidManagerActions.submitBids(handleRedirect));
    }

    const handleRedirect = () => {
        console.log('hello handle redirect');
        history.push('/auction/thanks');
    }

    return (
        <BidsStyled className='Bids'>
            {
                bids.map((bid, idx) => {
                    return <Bid key={ idx } bid={ bid } />
                })
            }
            <Button onClick={ handleSubmitBids }>Submit Bids</Button>
        </BidsStyled>
    );
}

export default Bids;

const BidsStyled = styled.div`
    
`;