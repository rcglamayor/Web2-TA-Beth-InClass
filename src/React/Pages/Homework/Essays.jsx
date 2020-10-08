import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essay from './Essay.jsx'

const Essays = ({ essays }) => {
    return (
        <EssaysStyled>
            {
                essays.map((essay, idx) => {
                    return <Essay key={ idx } essay={ essay }/>
                })
            }
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div `
    padding: 20px;
    border: solid 5px purple;
    background-color: #eee;
`;