import React, {  useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import FriendList from './components/friendList';
import AddFriend from './components/addFriend';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from './axios'

const loginURL = 'http://localhost:9000/api/login'
const friendURL = 'http://localhost:9000/api/friends'

function App() {
const [friends, setFriends] = useState([])


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

  const logout = () => {
    window.localStorage.removeItem('token')
  }

  const getFriends = () => {
    axiosWithAuth().get(friendURL)
    .then(res => {
      setFriends(res.data)
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
        <button id='logout' onClick={logout}>Logout</button>
      </nav>
      <Route path='/login'>
        <LoginForm login={login} />
      </Route>
      <Route path='/friends'>
        <FriendList getFriends={getFriends} />
      </Route>
      <Route path='/friends/add' >
        <AddFriend />
      </Route>
      
      </div>
      </Router>
  );
}

export default App;
