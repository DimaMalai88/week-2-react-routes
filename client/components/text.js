import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import Header from './header'

const Text = () => {
  const [readfile, setReadfile] = useState()
  const { userName, repositoryName } = useParams()

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((it) => setReadfile(it.data))
  }, [userName, repositoryName])

  return (
    <div>
      <Header repoName={repositoryName} />
      <div id="description">
        <ReactMarkdown source={readfile} />
      </div>
    </div>
  )
}

Text.propTypes = {}

export default React.memo(Text)
