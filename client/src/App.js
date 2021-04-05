import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contact/Contacts';

import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/form/contact" component={Contacts}/>
      </Switch>
    </div>
  )
}

export default App
