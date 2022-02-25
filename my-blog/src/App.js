
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetail from './BlogDetail';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Router exact path='/'>
              <Home />
            </Router>
            <Router path='/create'>
              <Create />
            </Router>
           
            <Router path='/blogs/:id'>
              <BlogDetail />
            </Router>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
