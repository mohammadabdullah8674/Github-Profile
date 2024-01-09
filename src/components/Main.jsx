import React, { useState } from 'react'
import RepositoryCard from './RepositoryCard'

function Main({ data, repoData, allRepo, showAllRepo }) {
    const [showAllRepoBool, setShowAllRepoBool] = useState(true)

    const showAllRepoHandler = () => {
        showAllRepo()
        setShowAllRepoBool(!showAllRepoBool)
    }

    return (
        <div className='main__container'>
            <div className="top__info">
                <div className="row__1">
                    <div className="img__container">
                        <img src={data?.avatar_url} alt={data?.name} />
                    </div>
                    <div className="badge">
                        <div className="top__badge">
                            Followers <span>{data?.followers}</span>
                        </div>
                        <div className="top__badge">
                            Following <span>{data?.following}</span>
                        </div>
                        <div className="top__badge">
                            Location <span>{data?.location}</span>
                        </div>
                    </div>
                </div>
                <div className="row__2">
                    <h2>{data?.name}</h2>
                    <p>{data?.bio}</p>
                </div>
            </div>
            <div className="repository__cards">
                {repoData.length > 0 && repoData.map((repo) => (
                    <a href={repo?.html_url} target='_blank' key={repo.id}  >
                        <RepositoryCard  repo={repo} />
                    </a>
                ))}
            </div>
            {
                allRepo && allRepo.length > 4 &&
                <p>
                   {showAllRepoBool ? <span onClick={showAllRepoHandler}>View all repositories</span> : <span>Thanks for visiting !!!!</span>} 
                </p>
            }

        </div>
    )
}

export default Main