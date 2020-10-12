import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Head from './head'
import Gits from './gits'
import RepoList from './repolist'
import Text from './text'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Switch>
        <Route exact path="/" component={() => <Gits />} />
        <Route exact path="/:userName" component={() => <RepoList />} />
        <Route exact path="/:userName/:repositoryName" component={() => <Text />} />
      </Switch>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
