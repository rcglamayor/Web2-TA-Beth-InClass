import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Aside from './Aside.jsx';
import Article from './Article.jsx';

const Template = ({title, children, aside=true}) => {

    console.log('Template');

    return (
        <TemplateStyled className='Template'>
            { aside && <Aside /> }
            <Article>
                <h1>{ title }</h1>
                <div className="content">
                    { children }
                </div>
            </Article> 
        </TemplateStyled>
    );
}

export default Template;

const TemplateStyled = styled.div`
    display: flex;
    
    .Aside {
        flex: 0 0 200px;
        padding: 20px;
        border-right: solid 1px #eee;
    }
    .Article {
        flex: 1;
        padding: 20px;
        min-height: 500px;
    }
`;