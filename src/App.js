import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Documentation from "./components/Documentation"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/features" component={Features}/>   
          <Route path="/documentation" component={Documentation}/>  
        </Switch>  
        <Footer/>   
      </div>
    </Router>
  );
}

export default App;
