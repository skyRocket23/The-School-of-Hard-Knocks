import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { BUY_CAKE, BUY_ICECREAM } from './Constant';


const middleware = [logger];

const initialState = {
    icecreamLeft: 50,
    cakeLeft: 20,
    pineappleLeft:50
};

function counter(state = initialState, action) {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                icecreamLeft: state.icecreamLeft - action.payload
            };
        case BUY_CAKE:
            return {
                ...state,
                cakeLeft: state.cakeLeft - action.payload
            };
        default:
            return state;
    }
}


const store = createStore(
    counter,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

export default store;
