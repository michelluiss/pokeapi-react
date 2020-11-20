import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home'
import PokemonDetails from '../views/pokemon/PokemonDetails'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/pokemon/:id" component={ PokemonDetails } />
    </Switch>
  </BrowserRouter>
)

export default Routes;