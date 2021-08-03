import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Registration from './registration/Registration';
import Login from './login/Login';
import App from './App';

export default function Approutes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={App}>
          </Route>

          <Route exact path="/register" component={Registration}>
          </Route>
          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}
