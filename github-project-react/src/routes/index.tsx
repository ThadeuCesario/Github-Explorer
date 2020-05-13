/**
 * Para trabalharmos com paginação nesse projeto, estamos utilizando o 'react-router-dom'
 *
 */

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard}/>

    {/* Veja que no path abaixo temos uma condição específica.
      *  path='/repository/:repository+'
      *  Estamos acessandos nossos repositórios da seguinte forma:
      *  http://localhost:3000/repositories/ThadeuCesario/javascript
      * Então precisamos informar para nossa rota que tudo que vem após
      * repository, é um paramentro. Para isso utitilizamos o ':repository+'.
      * Sem o '+' teríamos problemas pois nesse caso em específico temos outra '/'
      * após o primeiro parâmetro ':repository'.
      */}
    <Route path='/repositories/:repository+' component={Repository}/>
  </Switch>
);

export default Routes;
