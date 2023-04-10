// actions.js

import { BUY_ICECREAM, BUY_CAKE } from './Constant';

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    };
};

export const buyCake = () => {
    return {
        type: BUY_CAKE
    };
};
