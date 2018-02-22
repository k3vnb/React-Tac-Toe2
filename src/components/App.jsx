import React from 'react';
import Game from './Game';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Game} />
      </Switch>
    </div>
  );
}


export default App;
