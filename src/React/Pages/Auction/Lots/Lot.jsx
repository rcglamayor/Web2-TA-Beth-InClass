import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

/* Scripts ---------------------------*/
import { addLotToBids, removeLotToBids } from 'Redux/bidManager/actions.js';

const Lot = ({lot, auctionID}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        console.log('clickity-click');
        dispatch(addLotToBids(lot));
    }

    const handleRemoveLot = () => {
        console.log('remove');
        dispatch(removeLotToBids(lot));
    }

    return (
        <LotStyled className='Lot'>
            <img src={ `/assets/img/auctions/${auctionID}/lots/small/${lot.images.small}`} alt={lot.title}/>
            <h3>{ `Lot: ${lot.number}: ${lot.title}` }</h3>

            <button
                type='button'
                onClick={ handleOnClick }
                >Add Lot
            </button>
            <button
                type='button'
                onClick={ handleRemoveLot }
                >Remove Lot
            </button>
        </LotStyled>
    );
}

export default Lot;

const LotStyled = styled.div`
    flex: 0 0 200px;
    margin: 10px;

    border: solid 1px #eee;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 7px rgba(0,0,0,.05);
    }
`;