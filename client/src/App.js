import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contact/Contacts';

import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import Uploads from './components/uploads/Uploads';
import Register from './components/register/Register';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/form/contact" component={Contacts}/>
        <Route path="/uploads/form/contact" component={Uploads}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  )
}

export default App
