import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

/* Components ---------------------------*/
import Button from '../UniversalForm/Controls/Button.jsx';

const Toggle = ({onClick}) => {
    const { user } = useSelector((state) => state);

    const color = (user.isLoggedIn) ? '#8c0b04':'#de6444';

    return (
        <ToggleStyled className='Toggle'>
            <Button
                id='ToggleLogInButton'
                onClick={ onClick }
                unstyled={ true }
            >
                <FontAwesomeIcon icon={ faUserCircle } color={ color } /> 
            </Button>
        </ToggleStyled>
    );
}

export default Toggle;

const ToggleStyled = styled.div`
    .Button {
        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        opacity: 1;

        &:hover {
            opacity: .85;
        }

        svg {
            width: 100%;
            height: auto;
        }

    }
`;