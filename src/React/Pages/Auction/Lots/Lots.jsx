import React from 'react';
import styled from 'styled-components';

/* Redux ---------------------------*/
import { useSelector } from 'react-redux';

/* Components ---------------------------*/
import Lot from './Lot.jsx';

const Lots = () => {

    const { auction } = useSelector((state) => state);

    return (
        <LotsStyled className='Lots'>
            <h2>Lots</h2>
            <div className="lots-container">
                {
                    auction.lots.map((lot, idx) => {
                        return <Lot
                                    key={ idx }
                                    lot={ lot }
                                    auctionID={ auction.id }
                                />
                    })
                }
            </div>
        </LotsStyled>
    );
}

export default Lots;

const LotsStyled = styled.div`
    .lots-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;