import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginForm from './components/loginForm';
import FriendList from './components/friendList';
import AddFriend from './components/addFriend';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const loginURL = 'http://localhost:9000/api/login'

function App() {

  const login = ({ username, password }) => {
    axios.post(loginURL, { username, password  })
    .then(res => {
      const token = res.data.token
      window.localStorage.setItem('token', token)
    })
    .catch(err => {
      debugger
    })
  }

  return (
    <Router>
    <div className="App">
      <h2>Client Auth Project</h2>
      <nav>
        <NavLink id='loginScreen' to='/login'>Login</NavLink>
        <NavLink id='friendList' to='/friends'>Friends List</NavLink>
        <NavLink id='addFriend' to='/friends/add'>Add Friend</NavLink>
      </nav>
      <Route path='/login'>
        <LoginForm login={login} />
      </Route>
      <Route path='/friends'>
        <FriendList />
      </Route>
      <Route path='/friends/add' >
        <AddFriend />
      </Route>
      
      </div>
      </Router>
  );
}

export default App;
