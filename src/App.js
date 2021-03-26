
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
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} exact component={HomeGrid}/>
        <Route path={"/basicsproducts"} exact component={BasicsProducts}/>
        <Route path={"/exerciseproducts"} exact component={ExerciseProducts}/>
        <Route path={"/products"} exact component={Products}/>
        <Route path={"/beautyproducts"} exact component={BeautyProducts}/>
        <Route path={"/toyproducts"} exact component={ToyProducts}/>
        <Route path={"/cameraproducts"} exact component={CameraProducts}/>
        <Route path={"/laptopproducts"} exact component={LaptopProducts}/>
        <Route path={"/checkout"} exact component={CheckoutCart}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
