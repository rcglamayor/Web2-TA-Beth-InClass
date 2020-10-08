import React from 'react';
import styled from 'styled-components';

const Article = ({children}) => {

    return (
        <ArticleStyled className='Article'>
            { children } 
        </ArticleStyled>
    );
}

export default Article;

const ArticleStyled = styled.article`
    
`;