import React from 'react';
import styled from 'styled-components';

const Form = ({children, onSubmit}) => {

    return (
        <FormStyled onSubmit={onSubmit} className='Form'>
            {children} 
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.form`
    max-width: 500px;
    margin: 0px auto;
    background-color: #fcfcfc;
    padding: 20px;
    box-shadow: solid 1px #ccc;
`;