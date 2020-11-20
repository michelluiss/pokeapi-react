import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home'
import Pokemon from '../views/pokemon/Pokemon'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/pokemon" component={ Pokemon }/>
    </Switch>
  </BrowserRouter>
)

export default Routes;