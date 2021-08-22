import React, { useState } from 'react';
import './App.css';

import { Redirect,Switch,BrowserRouter as Router,Route,} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart/index';
import Menu from './component/common/Menu';
import BackgroundChange from './component/BackgroundChange';
import Login from './component/Auth/login';




function App() {
  const [auth,setAuth]=useState(false)

  const loginHandler=()=>{
    setAuth(true)
  }
  const logoutHandler=()=>{
    setAuth(false)
  }
  return (
    <React.Fragment>
     <BackgroundChange/>
    <div className='container'>
      
      <Router>
        <Switch>
          <Route exact path='/' render={(props)=><Home {...props} auth={auth} logoutHandler={logoutHandler}/>} />
          <Route path='/Login' render={(props)=><Login {...props} loginHandler={loginHandler}/>}/>
          {auth===true?
          <Route exact path='/cart' render={(props)=><Cart {...props} />} />
          :<Redirect to='/Login' />
          }
          
          <Route exact path='/menu' component={Menu}/>
          
        </Switch>
      </Router>
  
    </div>
    </React.Fragment>
  );
};

export default App;


