import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from './components/Layout';
import News from './pages/News';
import Profile from './pages/Profile';
import TaskList from './pages/TaskList';

function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/">
          <Redirect to="/task-list" />
        </Route>
        <TransitionGroup>
          <Route path="/task-list" exact>
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
        <TransitionGroup>
          <Route path="/profile" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                classNames="pages"
                timeout={300}
                unmountOnExit
              >
                <Profile />
              </CSSTransition>
            )}
          </Route>
        </TransitionGroup>
        <Route path="*" children={<div>Not found</div>} />
      </Layout>
    </Switch>
  );
}

export default App;
