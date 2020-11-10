import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './context/index.js';
import * as UFActions from './context/actions.js';

const Form = ({children}) => {
    /*---------------------------
    | State and Props
    ---------------------------*/
    const { state, dispatch } = useContext(Context);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        UFActions.handleOnSubmit(state, dispatch);
    }

    return (
        <FormStyled onSubmit={handleOnSubmit} className='Form'>
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