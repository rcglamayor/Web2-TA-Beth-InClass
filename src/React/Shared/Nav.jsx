import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <NavStyled className='Nav'>
            <NavLink to='/' exact>Home</NavLink> 
            <NavLink to='/login'>Login</NavLink> 
            <NavLink to='/auction'>Auction</NavLink> 
            <NavLink to='/homework'>Homework</NavLink> 
            <NavLink to='/contact'>Contact</NavLink> 
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    
`;