import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Logo from './Logo.jsx';
import Login from './Login/Login.jsx';

const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <Logo />
            <Login />
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    padding: 20px;
    text-align: center;

    position: relative;

    .Login {
        position: absolute;
        right: 20px;
        top: 20px;
    }
`;