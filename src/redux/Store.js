import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BUY_CAKE, BUY_ICECREAM } from './Constant';

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
                icecreamLeft: state.icecreamLeft - 1
            };
        case BUY_CAKE:
            return {
                ...state,
                cakeLeft: state.cakeLeft - 1
            };
        default:
            return state;
    }
}


const store = createStore(
    counter, 
    composeWithDevTools()
);

export default store;
