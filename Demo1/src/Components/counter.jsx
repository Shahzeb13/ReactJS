import {useReducer}  from 'react'
import styles from './counter.module.css';  
    const counterReducer = (count , action) => {
        switch (action.type) {
            case 'Increment':
                return {...count , count : count.count +1}
            case 'Decrement':
                return {...count , count : count.count -1}

            case 'Reset':
                return {...count , count : count.count = 0}
                
           
        }
    }
const Counter = () => {
    const initialState = {count : 0};
    const [count , dispatch] = useReducer(counterReducer , initialState);

    

    return (
        <section>
            <h1>Counter Program</h1>
            <h2>{count.count}</h2>
            <button onClick ={() => dispatch( {type : 'Increment'})}>Plus</button>
            <button onClick ={() =>dispatch( {type : 'Decrement'})}>Minus</button>
            <button onClick= {() =>dispatch({type : 'Reset'})}>Reset</button>
        </section>
    )
}


export default Counter;