import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/contato" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  
  ) ;
}

export default App;
