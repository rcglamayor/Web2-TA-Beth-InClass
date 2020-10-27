import React, { useEffect } from 'react';
import styled from 'styled-components';
import keycode from 'keycode';

/* Components ---------------------------*/
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const Lightbox = ({
    children, 
    isOpen, 
    onClose, 
    headerText
}) => {

    // when the component mounts
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch(keycode(e)) {
                case 'esc':
                    e.stopPropagation();
                    onClose();
                default:
                    return false;
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        // dismount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);


    const stopBubbling = (e) => {
        e.stopPropagation();
    }

    if (!isOpen) { return ''; }

    return (
        <LightboxStyled className='Lightbox' onClick={ onClose }>
            <div className="theLight" onClick={ stopBubbling }>
                <header>
                    <h2>{headerText}</h2>
                </header>
                <Button onClick={ onClose }>
                    X
                </Button>
                <div className="content">
                    {children}
                </div>
            </div> 
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    background-color: rgba(0,0,0,.75);

    .theLight {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        width: 300px;

        header {
            background-color: teal;
            color: #fff;
            padding: 10px 40px 10px 10px;

            h2 {
                margin: 0px;
                font-size: 20px;
            }
        }

        > .Button {
            position: absolute;
            right: 0px;
            top: 0px;
            margin: 0px;
        }

        .content {
            padding: 10px;
            min-height: 100px;
        }
    }

`;