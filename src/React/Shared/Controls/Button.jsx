import React from 'react';
import styled from 'styled-components';

const Button = ({children, onClick, type='button'}) => {

    return (
        <ButtonStyled 
            className='Button'
            onClick={ onClick }
            type={ type }
        >
            { children } 
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`
    background-color: #f19e37;

    display: inline-block;
    margin: 10px;
    padding: 10px 15px;
    border-radius: 5px;

    border: none;
    outline: none;

    box-shadow: 5px 5px 5px rgba(0,0,0,.3);

    &:active {
        box-shadow: 0px 0px 5px rgba(0,0,0,.3);
    }

    &:focus {
        background-color: #ee5737;
    }
`;