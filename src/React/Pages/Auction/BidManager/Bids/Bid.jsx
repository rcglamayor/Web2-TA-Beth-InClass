import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

/* Scripts ---------------------------*/
import { removeLotToBids } from 'Redux/bidManager/actions.js';

const Bid = ({bid}) => {

    const dispatch = useDispatch();

    const handleRemoveLot = () => {
        dispatch(removeLotToBids(bid.lot));
    }

    return (
        <BidStyled className='Bid'>
            <div>
                { `${bid.lot.number}: ${bid.lot.title}`}
                <button
                    type='button'
                    onClick={ handleRemoveLot }
                >
                    x
                </button>
            </div> 
        </BidStyled>
    );
}

export default Bid;

const BidStyled = styled.div`
    
`;