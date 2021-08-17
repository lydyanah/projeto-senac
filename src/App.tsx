import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import AddItem from './pages/addItem';
import Closet from './pages/closet';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/contato" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Signup} />
        <Route path="/closet" component={Closet} />
        <Route path="/adicionar-item" component={AddItem} />
      </Switch>
    </BrowserRouter>
  
  ) ;
}

export default App;
