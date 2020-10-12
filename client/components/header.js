import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <nav className="flex items-center bg-indigo-900 justify-between flex-wrap text-white p-10">
      <div className="flex flex mr-10" id="repository-name">
        {userName}
      </div>
      {repositoryName && (
        <Link id="go-repository-list" to={`/${userName}`}>
          go repository
        </Link>
      )}
      <Link id="go-back" to="/">
        go back
      </Link>
    </nav>
  )
}

export default React.memo(Header)
