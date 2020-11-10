import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/index.js';
import * as UFActions from '../context/actions.js';

const Textarea = ({formField}) => {
    const { state, dispatch } = useContext(Context);

    const {
        formData
    } = state;

    const handleOnChange = (e) => {
        formField.value = e.target.value;
        dispatch(UFActions.handleOnInputChange(formField, formData));
    }

    return (
        <TextareaStyled className='Textarea'
            className='Input'
            id={ formField.id }
            name={ formField.id }
            value={ formField.value }
            type={ formField.type }
            onChange={ handleOnChange }
        />
    );
}

export default Textarea;

const TextareaStyled = styled.textarea`
    background-color: #fff;
    font-size: 16px;
    padding: 5px 10px;
    border: solid 1px #999;
    width: 100%;
    height: 200px;
`;