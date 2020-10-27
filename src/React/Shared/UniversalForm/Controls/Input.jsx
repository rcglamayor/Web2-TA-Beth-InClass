import React from 'react';
import styled from 'styled-components';

const Input = ({formField, onChange}) => {

    const handleOnChange = (e) => {
        formField.value = e.target.value;
        onChange(formField);
    }

    return (
        <InputStyled 
            className='Input'
            id={ formField.id }
            name={ formField.id }
            value={ formField.value }
            onChange={ handleOnChange }
        />
    );
}

export default Input;

const InputStyled = styled.input`
    background-color: #fff;
    font-size: 16px;
    padding: 5px 10px;
    border: solid 1px #999;
    width: 100%;
`;