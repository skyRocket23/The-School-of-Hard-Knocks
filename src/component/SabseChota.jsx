import React,{useContext} from 'react'
import { countContext } from './Pehlapyar'

const SabseChota = () => {

    const countContextt = useContext(countContext);
    
  return (
    
    <div className="buttons">
        <div className="counterBeta">
            <h1>SabseChota ji - {countContextt.countState}</h1>
        </div>
        <button onClick={()=>countContextt.dispatchState({type:'increment'})}>IncrementSabsseChota</button>
        <button onClick={()=>countContextt.dispatchState({type:'decrement'})}>DecrementSabsseChota</button>
        <button onClick={()=>countContextt.dispatchState({type:'reset'})}>ResetSabsseChota</button>
    </div>
  )
}

export default SabseChota;