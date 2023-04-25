import React,{useReducer,createContext} from 'react'
import BetaComponent from './BetaComponent'
import PotaComponent from './PotaComponent'
import SabseChota from './SabseChota'

const initialState = 0;

const reduce = (state,action) => {
      switch (action.type) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
      }
}

export const countContext = createContext();


const Pehlapyar = () => {

    const[count,dispatch] = useReducer(reduce,initialState);

  return (

    <>

       <h1> Count - {count} </h1>

       <hr />

       <countContext.Provider value={{countState:count,dispatchState:dispatch}}>
          <BetaComponent/>
          <hr />
          <PotaComponent/>
          <hr />
          <SabseChota/>
          <hr />
       </countContext.Provider>

    </>
  )
}

export default Pehlapyar