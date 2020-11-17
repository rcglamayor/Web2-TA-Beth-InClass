import React from 'react';
import styled from 'styled-components';

/* Redux ---------------------------*/
import { useSelector } from 'react-redux';

const Aside = () => {

    const { auction } = useSelector((state) => state);

    return (
        <AsideStyled className='Aside'>
            <img src={ `/assets/img/auctions/${auction.current.id}/auction.jpg` } alt={ auction.title } />
            <h2>{ auction.current.title }</h2> 
        </AsideStyled>
    );
}

export default Aside;

const AsideStyled = styled.aside`
    img {
        max-width: 100%;
    }
`;