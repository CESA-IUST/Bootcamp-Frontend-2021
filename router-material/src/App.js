import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import Home from './views/pages/Home';
import Profile from './views/pages/Profile';
import Feed from './views/pages/Feed';
import Dashboard from './views/pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Route  path="/" exact component={Home} />
        <Route  path="/Profile" exact  children={<Dashboard/>} component={Profile} />        
        <Route  path="/Feed"  children={<Dashboard/>} component={Feed} />
        <Route  path="/Profile/:userId" exact    component={Profile} />
        <Route  path="/Dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
