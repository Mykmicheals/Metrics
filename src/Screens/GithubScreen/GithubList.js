import React from 'react'
import './GithubScreenStyle.css'

function GithubList({ data }) {
  
    return (
        <div className='github-page'>
            <ul>
                {data.map((each) => {
                   var stars = each.stargazers_count.toFixed(2)
                    return <li className='github-list'>
                        <div>
                            <img src={each.owner.avatar_url} alt={each.name} />
                        </div>
                        <div>
                            <p>Repo Name: {each.name}</p>
                            <p>Description:{each.description}</p>
                            <p>stars: {each.stargazers_count }</p>
                            <p>Issues: {each.open_issues_count}</p>
                        </div>

                    </li>

                })}
            </ul>
        </div>
    )
}

export default GithubList