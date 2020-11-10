import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import keycode from 'keycode';

/* Scripts ---------------------------*/
import { useClickOutside } from 'common/useClickOutside.js';

/* Component ---------------------------*/
import Toggle from './Toggle.jsx';
import LogOut from './LogOut.jsx';
import Form from './Form.jsx';

const Login = () => {

    /*---------------------------
    | State & Props
    ---------------------------*/
    const { user } = useSelector((state) => state);

    const [ showForm, showFormUpdate ] = useState(false);

    /*---------------------------
    | Functions
    ---------------------------*/
    const toggleShowForm = () => {
        showFormUpdate(!showForm);
    }
    const hideForm = () => {
        showFormUpdate(false);
    }

    const bottomRef = useRef();
    useClickOutside(bottomRef, hideForm, ['#ToggleLogInButton']);

    /*---------------------------
    | Lifecycle
    ---------------------------*/
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch(keycode(e)) {
                case 'esc':
                    e.stopPropagation();
                    hideForm();
                default:
                    return false;
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        // dismount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    
    /*---------------------------
    | Render
    ---------------------------*/
    return (
        <LoginStyled className='Login'>
            <div className="top">
                <Toggle onClick={ toggleShowForm }/>
            </div>
            {
                showForm &&
                <div className="bottom" ref={ bottomRef }>
                    {
                        user.isLoggedIn
                        ? <LogOut />
                        : <Form />
                    }
                </div>
            }
            </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    position: relative;

    .bottom {
        position: absolute;
        right: 0px;
        top: 56px;

        background-color: #fff;
        padding: 10px;
        border: solid 1px #ccc;

        width: 400px;
        z-index: 1000;

        &::before {
            content: " ";
            display: block;
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #ccc;
            position: absolute;
            top: -11px;
            right: 15px;
            z-index: -2;
        }
        &::after {
            content: " ";
            display: block;
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid white;
            position: absolute;
            top: -10px;
            right: 15px;
            z-index: -1;
        }
    }
`;