/*---------------------------
| IE 11 Support
---------------------------*/
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

/*---------------------------
| React and 3rd Party Libraries
---------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/*---------------------------
| Components
---------------------------*/
import Main from './React/Main.jsx';

/*---------------------------
| Add Redux to Our App
---------------------------*/
import configureStore from './Redux/configureStore.js';

const ReactRedux = () => {
    return (
        <Provider store={ configureStore() }>
            <Main />
        </Provider>
    )
}

/*---------------------------
| Render to DOM
---------------------------*/
ReactDOM.render(<ReactRedux />, document.getElementById('root'));