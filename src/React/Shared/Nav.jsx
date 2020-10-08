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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;

    a {
        display: block;
        flex: 0 0 150px;

        margin-right: 5px;
        background-color: #eee;
        border-bottom: 3px solid #333;

        font-size: 14px;
        text-align: center;
        text-decoration: none;
        height: 40px;
        line-height: 40px;

        &:hover {
            background-color: #ddd;
            border-bottom: 3px solid #333;
        }

        &.active {
            background-color: #de6444;
            border-bottom: 3px solid #6b2c1c;
            color: #fff;

        }

        &:last-child { margin-right: 0px; }
    }
`;