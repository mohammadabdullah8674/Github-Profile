import React from 'react'
import commitIcon from "../assets/Nesting.svg"
import StarIcon from "../assets/Star.svg"
import Chield from "../assets/Chield_alt.svg"
import { timeAgo } from '../utils/formatDate'

function RepositoryCard({repo}) {
    
    return (
        <div className='repository__card'>
            <div className="repo__content">
                <div className="repo__name">
                    <p>{repo?.name}</p>
                </div>
                <div className="repo__description">
                    <p>{repo?.description}</p>
                </div>
                <div className="repo__icons">
                    {repo?.license &&  <><img src={Chield} alt={repo?.license?.name} /> <span>{repo?.license?.spdx_id}</span></> }
                    
                    <img src={commitIcon} alt="commit Icon" /> <span>{repo?.forks}</span>
                    <img src={StarIcon} alt="Star Icon" /> <span>{repo?.stargazers_count}</span>
                    <span className='updated__time'>
                        {timeAgo(repo?.updated_at)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RepositoryCard