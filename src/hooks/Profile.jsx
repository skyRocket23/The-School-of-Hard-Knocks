import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchProfile = () => {
    return axios('https://codeforces.com/api/user.info?handles=tourist')
}

const Profile = () => {
    const { isLoading, data, isError, error} = useQuery('profile', fetchProfile);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error: {error.message}</h1>
    }

    console.log(data?.data?.result[0].handle);

    return (
        <div className='profile'>
            <div className="details">
                <h1>Codeforces ID : <span>{data?.data?.result[0].handle}</span></h1>
                <h1>Max Rank : <span>{data?.data?.result[0].maxRank}</span></h1>
                <h1>Max Rating : <span>{data?.data?.result[0].maxRating}</span></h1>
                <h1>Current Rating : <span>{data?.data?.result[0].rank}</span></h1>
            </div>

            <div className="image">
                <img src={data?.data?.result[0].titlePhoto} alt="" />
            </div>
            
            
        </div>
    )
}

export default Profile
