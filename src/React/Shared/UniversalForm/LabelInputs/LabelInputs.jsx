import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/index.js';

/* Components ---------------------------*/
import LabelInput from './LabelInput.jsx';

const LabelInputs = () => {

    const { state } = useContext(Context);

    const {
        formData
    } = state;

    return (
        <LabelInputsStyled className='LabelInputs'>
            {
                formData.map((formField, idx) => {
                    return <LabelInput 
                        key={ idx }
                        formField={ formField }
                    />
                })
            }
        </LabelInputsStyled>
    );
}

export default LabelInputs;

const LabelInputsStyled = styled.div`
    
`;