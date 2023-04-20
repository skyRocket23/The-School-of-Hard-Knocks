import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


const fetchProblems = () => {
    return axios('https://codeforces.com/api/problemset.problems');
}
const Problem = () => {
    const {isLoading,data,isError} = useQuery('problem',fetchProblems);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    const Problems = data?.data?.result?.problems;
    const problemsStats = data?.data?.result?.problemStatistics;

    const combinedProblems = Problems.map(problem => {
        const stats = problemsStats.find(stat => stat.contestId === problem.contestId);
        return {...problem,...stats};
    });

    console.log(combinedProblems[0]);

    
    var filteredProblem = combinedProblems.filter(problem => (problem.rating >=1200 && problem.rating<=1500));
    filteredProblem = filteredProblem.filter(problem => problem.solvedCount>=10000)
  return (
    <div>
        {filteredProblem.map(problem => (
            <div>
                <a href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`} target='_blank'>
      {problem.name}
    </a>
                
            </div>
        ))}
    </div>
  )
}

export default Problem