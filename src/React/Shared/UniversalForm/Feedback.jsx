import React from 'react';
import styled from 'styled-components';

import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const Feedback = ({ formStatus, onClose, feedbackMessage }) => {

    if (formStatus === 'pending') {
        return '';
    }

    const theColor = (formStatus === 'success') ? 'green':'maroon';

    return (
        <FeedbackStyled className='Feedback' theColor={ theColor }>
            <Button 
                onClick={ onClose }
                className='close'
            >
                X
            </Button>
            <h2>Title</h2>
            <div className="message">
                { feedbackMessage }
            </div>
        </FeedbackStyled>
    );
}

export default Feedback;

const FeedbackStyled = styled.div`
    border: solid 1px ${({theColor}) => theColor };
    max-width: 500px;
    margin: 20px auto;

    position: relative;

    .close {
        position: absolute;
        right: 5px;
        top: 5px;
        padding: 5px 10px;
        margin: 0px;
    }

    h2 {
        background-color: ${({theColor}) => theColor };
        color: #fff;
        padding: 10px;
        margin: 0px;
        font-size: 16px;
    }

    .message {
        padding: 10px;
    }
`;