import {Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';

// import Header from './components/header/header';
// import Hero from './components/hero/hero';
// import MainSection from './components/main-section/main-section';
// import FeaturedCollection from './components/featured-collection/featured-collection';
// import Footer from './components/footer/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        {/* <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/success' component={Success} />
        <Route path='canceled' component={Canceled} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} /> */}
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
