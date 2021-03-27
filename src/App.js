
import './App.css';
import Header from './components/Header'
import HomeGrid from './components/HomeGrid'
import Products from './components/Products'
import BeautyProducts from './components/BeautyProducts'
import ExerciseProducts from './components/ExerciseProducts'
import BasicsProducts from './components/BasicsProducts'
import ToyProducts from './components/ToyProducts'
import CameraProducts from './components/CameraProducts'
import LaptopProducts from './components/LaptopProducts'
import CheckoutCart from './components/CheckoutCart'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
    <div className="App">
      <Switch>
        <Route path={"/"} exact>
          <Header/>
          <HomeGrid />
        </Route>
        <Route path={"/login"} exact>
          <Login />
        </Route>
        <Route path={"/register"} exact>
          <Register />
        </Route>
        <Route path={"/products"} exact>
          <Header/>
          <Products />
        </Route>
        <Route path={"/basicsproducts"} exact>
          <Header/>
          <BasicsProducts />
        </Route>
        <Route path={"/exerciseproducts"} exact>
          <Header/>
          <ExerciseProducts />
        </Route>
        <Route path={"/beautyproducts"} exact>
          <Header/>
          <BeautyProducts />
        </Route>
        <Route path={"/toyproducts"} exact>
          <Header/>
          <ToyProducts />
        </Route>
        <Route path={"/cameraproducts"} exact>
          <Header/>
          <CameraProducts />
        </Route>
        <Route path={"/laptopproducts"} exact>
          <Header/>
          <LaptopProducts />
        </Route>
        <Route path={"/checkout"} exact>
          <Header/>
          <CheckoutCart />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
