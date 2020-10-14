import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import LoginPage from './components/Login/LoginPage';
import RegisterPage from './container/Register';
import Home from './container/Home';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header'
import { AppContainer } from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;