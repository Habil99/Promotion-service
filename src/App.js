import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/Layout';

function App() {

  useEffect(() => {
    return <Redirect to="/task-list" />
  }, [])

  return (
    <Layout>
      <Switch>
        <Route path="/task-list" exact>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur error vero deserunt tempora aliquid minus corporis culpa dolor, iure mollitia nobis sed hic ipsam, saepe ipsa porro iste beatae? Accusamus, dolores est cumque itaque ut quasi sit esse nulla ex repellendus tenetur suscipit laboriosam tempora, illo quas qui delectus dolorum aliquam iure laborum doloremque, ipsum aperiam consectetur! Facilis, sapiente? Dolor, quam nam sunt voluptates cumque accusantium tempora nemo unde ad, iusto at qui. Optio, cum sint debitis et est nemo ab eligendi beatae doloribus fugiat odio nihil, recusandae quam officia dolore laborum omnis aliquid iusto libero voluptatem rerum sunt vel.
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
