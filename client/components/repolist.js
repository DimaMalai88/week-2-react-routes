import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Header from './header'

const RepoList = () => {
  const { userName } = useParams()

  const [repolist, setRepolist] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      const repData = it.data.map((item) => item.name)
      setRepolist(repData)
    }, [])
  })

  return (
    <div>
      <Header name={userName} />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <ul>
            {repolist.map((repo) => {
              return (
                <li key={repo}>
                  <Link to={`${userName}/${repo}`}>{repo}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

RepoList.propTypes = {}

export default React.memo(RepoList)
