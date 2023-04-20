import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchClan = () => {
    return axios('https://jsonplaceholder.typicode.com/posts/1');
}

const COC = () => {
   const{isLoading,isError,data} = useQuery('clashofclans',fetchClan);

   if(isLoading){
    return <h1>Loading...</h1>
   }
   else{
    console.log(data?.data?.body);
   }

  return (
    <div>COC</div>
  )
}

export default COC