import React from 'react';
import styled from 'styled-components';

const Essay = (props) => {

    const {
        essay
    } = props;

    const {
        title,
        question,
        AnswerComponent,
    } = essay;

    return (
        <EssayStyled>
            <h3>{ title }</h3>
            <div className="question">{ question}</div>
            <AnswerComponent />
        </EssayStyled>
    )
}

export default Essay;

const EssayStyled = styled.div `
    padding: 20px;
    margin: 20px 0px;
    border: solid 1px red;
`;