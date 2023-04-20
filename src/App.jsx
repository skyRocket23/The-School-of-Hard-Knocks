import { useState } from 'react'


import './App.css'
import COC from './COC';
import Profile from './hooks/Profile';
import { useFetchData } from './hooks/useFetchData';
import Problem from './Problem';



function App() {

  const onSuccess = () => {
    console.log('performs side effect after fetching');
  }

  const onError = () => {
    console.log('performs side effect after error');
  }

 
 const {isLoading,data,isError,error} = useFetchData(onSuccess,onError);

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>404 page not found</h2>
  }
  else{
    // console.log(data);
  }
  return (
    // <div>
    //   hi
    //   {
    //     data?.data.map((val) => (
    //       <div key={val.id}>{val.userId}---{val.title}</div>
    //     ))

        
    //   }
    // </div>
    <div>
      {/* <Profile/> */}
      {/* <Problem/> */}
      <COC/>
    </div>
  )
}

export default App
