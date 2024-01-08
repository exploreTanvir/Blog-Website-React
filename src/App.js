import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import TopBar from './components/TopBar/TopBar';
import Home from './components/pages/Home/Home';
import Settings from './components/pages/Settings/Settings';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Single from './components/pages/single/Single';
import Write from './components/pages/write/Write';

const App = () => {
  const user=true
  return (
    <Router>
      <TopBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
          {user?<Home/>:<Register />}
          </Route>
          <Route path="/login">
          {user?<Home/>:<Login />}
          </Route>
          <Route path="/write">
          {user?<Write/>:<Register />}

          </Route>
          <Route path="/settings">
          {user?<Settings/>:<Register />}

          </Route>
          <Route path="/post">
            <Single />
          </Route>
        </Switch>
    </Router>
  )
}

export default App