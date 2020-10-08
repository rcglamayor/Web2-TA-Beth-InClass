import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Template from '../Shared/Template.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <Template title='Login'>
                Login
            </Template> 
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;