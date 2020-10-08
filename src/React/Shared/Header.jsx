import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Logo from './Logo.jsx';

const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <Logo />
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    padding: 20px;
    text-align: center;
`;