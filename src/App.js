import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import About from './components/About'
import Users from './components/Users'
import StrictAcess from './StrictAcess';

class App extends Component {
  render() {
    const user = {
      username:'João',
      password:'1234',
    }
    return (
      <BrowserRouter>
        <Switch>
        <Route component={Home}  exact path='/' />
        <Route component={About} path='/about' />
        <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning' />}  />
        <Route path='/strict-acess' render={() => <StrictAcess user={ user } />} />
        </Switch>
        <Link to='/'>
          <button>Home</button>
          </Link>
        <Link to='/about'>
          <button>Sobre</button>
        </Link>
        <Link to ='/users'>
          <button>Usuários</button>
        </Link>
        <Link to='/strict-acess'>
          <button>Strict Acess</button>
        </Link>
      </BrowserRouter>
    );
  }
}

export default App;
