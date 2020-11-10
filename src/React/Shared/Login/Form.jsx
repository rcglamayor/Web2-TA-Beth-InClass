import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import * as UserActions from 'Redux/user/actions.js';

/* Component ---------------------------*/
import UniversalForm from 'React/Shared/UniversalForm/UniversalForm.jsx';

const Form = () => {

    const dispatch = useDispatch();

    const defaultData = [
        { id: 'username', value: '', required: true, label: 'Username', type: 'text', },
        { id: 'password', value: '', required: true, label: 'Password', type: 'password', }
    ];

    const handleOnSubmit = (apiResponse) => {
        console.log('Login Form: Server Response', apiResponse);

        if (!apiResponse.errors) {
            const isLoggedIn = true;
            const profile = apiResponse.profile;
            dispatch(UserActions.userAuthUpdate(isLoggedIn, profile));
        }
    }
    
    return (
        <FormStyled className='Form'>
            <UniversalForm
                formData={ defaultData }
                submitText='Log In'
                apiEndpoint='/login/validate'
                onSubmit={ handleOnSubmit }
            /> 
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.div`
    
`;