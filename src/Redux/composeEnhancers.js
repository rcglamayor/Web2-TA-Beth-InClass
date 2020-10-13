import { applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// Redux Dev Tools

const enhancers = 
    (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ({name: 'LA Modern Auctions'})
    : compose;

const composeEnhancers = enhancers(
    applyMiddleware(ReduxThunk),
);

export default composeEnhancers;