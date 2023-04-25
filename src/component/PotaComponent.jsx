import React,{useContext} from 'react'
import { countContext } from './Pehlapyar'

const PotaComponent = () => {

    const countContextt = useContext(countContext);
    
  return (
    
    <div className="buttons">
        <div className="counterBeta">
            <h1>Pota ji - {countContextt.countState}</h1>
        </div>
        <button onClick={()=>countContextt.dispatchState({type:'increment'})}>IncrementPota</button>
        <button onClick = {() => countContextt.dispatchState({type:'decrement'})}>DecrementPota</button>
        <button onClick = {() => countContextt.dispatchState({type:'reset'})}>ResetPota</button>
    </div>
  )
}

export default PotaComponent