import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Template from '../Shared/Template.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <Template title='Contact'>
                Contact
            </Template> 
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;