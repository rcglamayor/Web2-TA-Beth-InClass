import React from 'react';
import styled from 'styled-components';

/* Redux ---------------------------*/
import { useSelector } from 'react-redux';

const Aside = () => {

    const auction = useSelector((state) => state);

    console.log('auction', auction);

    return (
        <AsideStyled className='Aside'>
            <img src={ `/assets/img/auctions/${auction.id}/auction.jpg` } alt={ auction.title } />
            <h2>{ auction.title }</h2> 
        </AsideStyled>
    );
}

export default Aside;

const AsideStyled = styled.aside`
    img {
        max-width: 100%;
    }
`;