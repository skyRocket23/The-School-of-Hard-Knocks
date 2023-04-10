// app.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream, buyCake } from '../redux/Actions';

function App() {
    const iceCreams = useSelector(state => state.icecreamLeft);
    const cakes = useSelector(state => state.cakeLeft);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Ice Creams: {iceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream(2))}>Buy Ice Cream</button>
            <h2>Cakes: {cakes}</h2>
            <button onClick={() => dispatch(buyCake(3))}>Buy Cake</button>
        </div>
    );
}

export default App;
