import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CreateTask from "./pages/CreateTask";
import Layout from "./components/Layout";
import News from "./pages/News/";
import Detail from "./pages/News/Detail";
import PopularDetail from "./pages/News/PopularDetail";
import Profile from "./pages/Profile";
import TaskList from "./pages/TaskList";

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
        <TransitionGroup>
          <Route path="/news/most-popular/:newsId" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                classNames="pages"
                timeout={300}
                unmountOnExit
              >
                <PopularDetail />
              </CSSTransition>
            )}
          </Route>
        </TransitionGroup>
        <TransitionGroup>
          <Route path="/news/:newsId" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                classNames="pages"
                timeout={300}
                unmountOnExit
              >
                <Detail />
              </CSSTransition>
            )}
          </Route>
        </TransitionGroup>
        <TransitionGroup>
          <Route path="/create-task" exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                classNames="pages"
                timeout={300}
                unmountOnExit
              >
                <CreateTask />
              </CSSTransition>
            )}
          </Route>
        </TransitionGroup>
      </Layout>
    </Switch>
  );
}

export default App;
