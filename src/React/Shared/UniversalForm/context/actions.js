import { ActionTypes } from './actionTypes.js';
import API from 'common/API.js';

/*===================================
|| 
|| Action Creators
|| 
===================================*/

export const formDataUpdate = (formData) => {
    return {
        type: ActionTypes.UF_FORM_DATA_UPDATE,
        formData: formData,
    }
}
export const statusUpdate = (formStatus) => {
    return {
        type: ActionTypes.UF_STATUS_UPDATE,
        formStatus: formStatus,
    }
}
export const feedbackMessageUpdate = (feedbackMessage) => {
    return {
        type: ActionTypes.UF_FEEDBACK_MESSAGE_UPDATE,
        feedbackMessage: feedbackMessage,
    }
}

/*===================================
|| 
|| Action Dispatchers
|| 
===================================*/
export const handleOnInputChange = (newFormField, formData) => {
    console.log('handleOnChange', newFormField);

    const newFormData = formData.map((field) => {
        return (field.id === newFormField.id) ? newFormField : field;
    });

    return formDataUpdate(newFormData);
}

export const handleOnSubmit = (state, dispatch) => {
    const {
        formData,
        apiEndpoint,
        onSubmit,
    } = state;

    // validate form data
    let errors = false;
    let postData = {};

    formData.forEach((field) => {
        if (field.required && field.value.length < 1) {
            errors = true;
            dispatch(feedbackMessageUpdate(`The ${field.id} is required.`));
        }

        postData[field.id] = field.value
    });

    // if invalid, update error message
    if (errors) {
        dispatch(statusUpdate('error'));
    } else {
        
        // let parent know of submission

        API.post(apiEndpoint, postData).then((apiResponse) => {
            console.log('UF Actions: apiResponse', apiResponse);

            // if all passes, submit data
            dispatch(feedbackMessageUpdate('You did it!'));
            dispatch(statusUpdate('success'));

            onSubmit(apiResponse.data);
        });

    }

}