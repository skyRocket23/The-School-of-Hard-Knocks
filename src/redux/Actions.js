// actions.js

import { BUY_ICECREAM, BUY_CAKE } from './Constant';

export const buyIceCream = (x) => {
    return {
        type: BUY_ICECREAM,
        payload:x
    };
};

export const buyCake = (x) => {
    return {
        type: BUY_CAKE,
        payload:x
    };
};
