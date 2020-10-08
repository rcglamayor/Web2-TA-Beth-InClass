import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Logo from './Logo.jsx';


const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <Logo />
            <div className="copyright">
                &copy; LAMA: Los Angeles Modern Auctions. All rights reserved.
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    text-align: center;
    padding: 50px 20px;
    border-top: solid 1px #eee;
    color: #333;
    font-size: 11px;
`;