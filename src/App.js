import React from 'react';
import { Route, Switch } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from './components/Layout';
import News from './pages/News';
import TaskList from './pages/TaskList';

function App() {

  return (
    <Layout>
      <Switch>
        <TransitionGroup>
          <Route path="/" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                classNames="pages"
                timeout={300}
                unmountOnExit
              >
                <TaskList />
              </CSSTransition>
            )}
          </Route>
          <Route path="/news" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                classNames="pages"
                timeout={300}
                unmountOnExit
              >
                <News />
              </CSSTransition>
            )}
          </Route>
        </TransitionGroup>
      </Switch>
    </Layout>
  );
}

export default App;
