import React,{useContext} from 'react'
import { countContext } from './Pehlapyar'

const BetaComponent = () => {

    const countContextt = useContext(countContext);
    
  return (
    
    <div className="buttons">
        <div className="counterBeta">
            <h1>Beta ji - {countContextt.countState}</h1>
        </div>
        <button onClick={() => countContextt.dispatchState({type:'increment'})}>IncrementBeta</button>
        <button onClick = {() => countContextt.dispatchState({type:'decrement'})}>DecrementBeta</button>
        <button onClick = {() => countContextt.dispatchState({type:'reset'})}>ResetBeta</button>
    </div>
  )
}

export default BetaComponent