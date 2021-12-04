import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/Sobre'
import List from '../pages/ToDoList/ToDoList'

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/sobre" exact component={Sobre} />
        <Route path="/todolist" exact component={List} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;