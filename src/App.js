
import './App.css';
import Header from './components/Header'
import HomeGrid from './components/HomeGrid'
import Products from './components/Products'
import CheckoutCart from './components/CheckoutCart'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} exact component={HomeGrid}/>
        <Route path={"/products"} exact component={Products}/>
        <Route path={"/checkout"} exact component={CheckoutCart}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
