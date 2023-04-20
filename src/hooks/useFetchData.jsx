import { useQuery } from 'react-query'
import axios from 'axios';

const fetchData = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

export const useFetchData = (onSuccess,onError) => {
 return useQuery(
        'key',
        fetchData,
        // {
        //     refetchInterval: 20000,
        //     refetchIntervalInBackground: true,
        //     onSuccess: onSuccess,
        //     onError: onError,
            // select:(data) => {
            //   const jsonTitle = data.data.map((val) => val.name);
            //   return jsonTitle;
            // }
        // }
    )
}