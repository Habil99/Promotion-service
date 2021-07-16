import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Layout from './components/Layout';
import TaskList from './components/TaskList';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={TaskList} />
      </Switch>
    </Layout>
  );
}

export default App;
