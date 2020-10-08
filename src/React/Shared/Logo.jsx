import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <LogoStyled className='Logo'>
            <Link to='/'>
                <img src="/assets/img/lama-logo.png" alt="LAMA logo"/> 
            </Link>
        </LogoStyled>
    );
}

export default Logo;

const LogoStyled = styled.div`
    
`;