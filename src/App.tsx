import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Signup from './pages/signup';
import Closet from './pages/closet';
import AddItem from './pages/addItem';
import VisualizarItem from './pages/closet/itemCloset';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/contato" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Signup} />
        <Route path="/closet" exact component={Closet} />
        <Route path="/adicionar-item" component={AddItem} />
        <Route path="/itens/:id" component={VisualizarItem} />
      </Switch>
    </BrowserRouter>
  
  ) ;
}

export default App;
