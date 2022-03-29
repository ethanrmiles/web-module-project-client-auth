import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginForm from './components/loginForm';

function App() {

  const login = () => {
    return null
  }

  return (
    <Router>
    <div className="App">
      <h2>Client Auth Project</h2>
      <Route path='/'>
        <LoginForm login={login} />
      </Route>
      <Route path='/friends'>
        {/* <FriendList /> */}
      </Route>
      <Route path='/friends/add' >
        {/* <AddFriend /> */}
      </Route>
      
      </div>
      </Router>
  );
}

export default App;
