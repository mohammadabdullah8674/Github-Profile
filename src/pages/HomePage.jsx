import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Main from '../components/Main'

function HomePage() {
    const [apiData, setApiData] = useState({})
    const [allRepo, setAllRepo] = useState([])
    const [visRepo, setVisRepo] = useState([])


    const handleSubmit = async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)
        if (data) {
            setApiData(data)
            const res = await fetch(data?.repos_url)
            const repository = await res.json()
            console.log(repository)
            setVisRepo(repository.slice(0, 4))
            setAllRepo(repository)
        }
    }
    const showAllRepo = () => {
       setVisRepo(allRepo)
    }
    useEffect(()=>{
        handleSubmit("gitHub")
    }, [])
    return (
        <>
            <Container>
                <Header OnSubmit={handleSubmit} />
                <Main data={apiData} repoData={visRepo} allRepo={allRepo} showAllRepo={showAllRepo} />
            </Container>
        </>
    )
}

export default HomePage