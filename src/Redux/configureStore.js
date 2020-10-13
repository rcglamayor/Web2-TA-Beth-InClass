import { createStore } from 'redux';
import combinedReducers from './combinedReducers.js';
import composeEnhancers from './composeEnhancers.js';

const configureStore = () => {
    return createStore(combinedReducers, composeEnhancers);
}

export default configureStore;