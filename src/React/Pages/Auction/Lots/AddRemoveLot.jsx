import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

/* Scripts ---------------------------*/
import { addLotToBids, removeLotToBids } from 'Redux/bidManager/actions.js';

/* Components ---------------------------*/
import Button from 'React/Shared/Controls/Button.jsx';

const AddRemoveLot = ({ lot }) => {
    // Grab Redux Dispatcher to update store
    const dispatch = useDispatch();

    // Grab Redux Store
    const { bidManager: { bids } } = useSelector((state) => state);
    // console.log('AddRemoveLot Redux bids', bids);

    // Check if this lot is in our bids
    const isInBids = bids.find((bid) => {
        return bid.lot.id === lot.id;
    });

    console.log('AddRemoveLot isInBids', isInBids);

    /*---------------------------
    | Methods
    ---------------------------*/
    const handleOnClick = () => {
        console.log('clickity-click');
        dispatch(addLotToBids(lot));
    }

    const handleRemoveLot = () => {
        console.log('remove');
        dispatch(removeLotToBids(lot));
    }

    return (
        <AddRemoveLotStyled className='AddRemoveLot'>

            {
                (isInBids)
                ? <Button onClick={ handleRemoveLot }> I Can't Afford This </Button>
                : <Button onClick={ handleOnClick }> Ooh I Want This </Button>
            }
        </AddRemoveLotStyled>
    );
}

export default AddRemoveLot;

const AddRemoveLotStyled = styled.div`
    
`;