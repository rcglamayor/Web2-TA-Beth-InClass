import React, { useState } from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Template from '../Shared/Template.jsx';

import Form from 'React/Shared/UniversalForm/Form.jsx';
import Feedback from 'React/Shared/UniversalForm/Feedback.jsx';
import LabelInput from 'React/Shared/UniversalForm/LabelInput.jsx';
import Input from 'React/Shared/UniversalForm/Controls/Input.jsx';
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const defaultData = [
    { id: 'username', value: '', },
    { id: 'password', value: '', }
];

const Login = () => {

    const [formData, formDataUpdate] = useState(defaultData);
    const [formStatus, formStatusUpdate] = useState('pending');
    const [feedbackMessage, feedbackMessageUpdate] = useState('');

    const grabFormField = (id) => {
        return formData.find(formField => formField.id === id);
    }

    const handleOnChange = (newFormField) => {
        console.log('handleOnChange', newFormField);

        const newFormData = formData.map((field) => {
            return (field.id === newFormField.id) ? newFormField : field;
        });

        formDataUpdate(newFormData);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        formStatusUpdate('success');

        // validate form data
        let errors = false;
        formData.forEach((field) => {
            if (field.value.length < 1) {
                errors = true;
                feedbackMessageUpdate(`The ${field.id} is required.`);
            }
        });

        // if invalid, update error message
        if (errors) {
            formStatusUpdate('error');
        } else {
        // if all passes, submit data
            feedbackMessageUpdate('You did it!');
            formStatusUpdate('success');
        }


        // show message
    }
    return (
        <LoginStyled className='Login'>
            <Template title='Login'>
                <Feedback
                    formStatus={ formStatus } 
                    feedbackMessage={ feedbackMessage }
                    onClose={ () => { formStatusUpdate('pending') } }
                />
                <Form onSubmit={ handleOnSubmit }>
                    Form content
                    <LabelInput
                        label='Username'
                        formField={ grabFormField('username') }
                    >
                        <Input 
                            formField={ grabFormField('username') }
                            onChange={ handleOnChange }
                        />
                    </LabelInput>
                    <LabelInput
                        label='Password'
                        formField={ grabFormField('password') }
                    >
                        <Input 
                            formField={ grabFormField('password') }
                            onChange={ handleOnChange }
                        />
                    </LabelInput>
                    <Button type='submit'>Log In</Button>
                </Form>
            </Template> 
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;