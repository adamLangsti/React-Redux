import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './components/actions/actions';
const App = () => {
    const counter = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(6))}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default App;
