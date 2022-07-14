import React, { useCallback, useEffect, useState } from 'react'
import GithubList from './GithubList';


function GithubFetchLogic() {
    const [githubData, setGithubState] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const apiUrl = 'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc'
    const getDataFunc = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error('Something went wrong!');
            } else {
                const data = await response.json()
                setGithubState(data.items)
            }
        } catch (error) {
            setError(error.message);
        }
        setLoading(false)

    }, [])
    useEffect(() => {
        getDataFunc()
    }, [getDataFunc])

    return (
        <GithubList data={githubData} />
    )
}

export default GithubFetchLogic