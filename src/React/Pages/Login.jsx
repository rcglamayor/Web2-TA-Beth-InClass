import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Template from '../Shared/Template.jsx';

const Login = ({auction}) => {

    console.log('Login auction', auction);

    return (
        <LoginStyled className='Login'>
            <Template title='Login' auction={auction}>
                Login
            </Template> 
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;