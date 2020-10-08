import React from 'react';
import styled from 'styled-components';

/* Component ---------------------------*/
import Template from '../Shared/Template.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Template title='Welcome' aside={ false }>
                Home Content
            </Template> 
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;