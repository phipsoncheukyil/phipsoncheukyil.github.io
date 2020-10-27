import React from 'react';
import NavMenu from './components/NavMenu';
import HomePage from './components/Home';
import ProductPage from './components/Products';
import AboutPage from './components/About';
import DetailPage from './components/ProductDetail';
import CartOrderDetailPage from './components/CartOrderDetail';
import CartPage from './components/Cart';
import SpecialOfferPage from './components/SpecialOffer';
import { HashRouter, Route, Link } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      siteState: 0,
      previousState: 0,
      focusProduct: null,
      shoppingCart: [],
      wishlist: []
    }

    // Navigation
    this.SetSiteState = this.SetSiteState.bind(this);
    this.ViewProductDetails = this.ViewProductDetails.bind(this);

    // Shopping Cart
    this.AddToCart = this.AddToCart.bind(this);
    this.RemoveCartOrder = this.RemoveCartOrder.bind(this);
    this.UpdateCartOrder = this.UpdateCartOrder.bind(this);

    // Wishlist
    this.AddToWishlist = this.AddToWishlist.bind(this);
    this.RemoveWishlistItem = this.RemoveWishlistItem.bind(this);
    this.AddWishToCart = this.AddWishToCart.bind(this);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  /// NAVIGATE PAGE
  //////////////////////////////////////////////////////////////////////////////////////////////////
  SetSiteState(newState) {
    console.log("Shopping Cart: ", this.state.shoppingCart);
    this.setState((state, props) => ({
      siteState: newState
    }), () => {if (newState !== 4) this.setState(() => ({focusProduct: null})); });
  }

  ViewProductDetails(newProduct, site) {
    console.log("Viewing product details for: ", newProduct);
    this.setState((state, props) => ({
      previousState: this.state.siteState,
      focusProduct: newProduct
    }), () => {this.SetSiteState(site)});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  /// SHOPPING CART
  //////////////////////////////////////////////////////////////////////////////////////////////////
  AddToCart(order) {
    console.log("New Order: ", order);
    let {amount, glaze, product} = order;
    let temp = this.state.shoppingCart;

    temp.push({
      id: this.state.shoppingCart.length,
      amount: amount,
      glaze: glaze,
      product: product
    });

    this.setState((state, props) => ({
      shoppingCart: temp
    }), () => {this.SetSiteState(this.state.previousState)});
  }

  RemoveCartOrder(id) {
    let temp = this.state.shoppingCart;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp.splice(i, 1);
        break;
      }
    }

    this.setState((state, props) => ({
      shoppingCart: temp
    }), () => {this.SetSiteState(3)});
  }

  UpdateCartOrder(id, newOrder) {
    let temp = this.state.shoppingCart;
    let {amount, glaze, product} = newOrder;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i].amount = amount;
        temp[i].glaze = glaze;
        temp[i].product = product;
        break;
      }
    }

    this.setState((state, props) => ({
      shoppingCart: temp
    }), () => {this.SetSiteState(3)});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  /// WISHLIST
  //////////////////////////////////////////////////////////////////////////////////////////////////
  AddToWishlist(order) {
    console.log("New Wishlist Item: ", order);
    let {amount, glaze, product} = order;
    let temp = this.state.wishlist;

    temp.push({
      id: this.state.wishlist.length,
      amount: amount,
      glaze: glaze,
      product: product
    });

    this.setState((state, props) => ({
      wishlist: temp
    }), () => {this.SetSiteState(1)});
  }

  RemoveWishlistItem(id) {
    let temp = this.state.wishlist;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp.splice(i, 1);
        break;
      }
    }

    this.setState((state, props) => ({
      wishlist: temp
    }), () => {this.SetSiteState(3)});
  }

  AddWishToCart(order) {
    console.log("Adding Wishlist Item to Cart: ", order);
    let {id, amount, glaze, product} = order;
    let temp = this.state.shoppingCart;

    temp.push({
      id: this.state.shoppingCart.length,
      amount: amount,
      glaze: glaze,
      product: product
    });

    this.setState((state, props) => ({
      shoppingCart: temp
    }), () => {this.RemoveWishlistItem(id)});
  }

  render() {
    let siteMap = {
      0: <HomePage setSite={this.SetSiteState}/>,
      1: <ProductPage openDetails={this.ViewProductDetails}/>,
      2: <AboutPage/>,
      3: <CartPage orders={this.state.shoppingCart} 
                   wishes={this.state.wishlist}
                   removeOrder={this.RemoveCartOrder} 
                   updateOrder={this.ViewProductDetails}
                   removeWish={this.RemoveWishlistItem} 
                   moveWish={this.AddWishToCart}/>,
      4: <DetailPage product={this.state.focusProduct} 
                     onBack={() => this.SetSiteState(this.state.previousState)} 
                     addToCart={this.AddToCart} 
                     addWish={this.AddToWishlist}/>,
      5: <CartOrderDetailPage order={this.state.focusProduct} 
                              onBack={() => this.SetSiteState(3)} 
                              removeOrder={this.RemoveCartOrder} 
                              updateOrder={this.UpdateCartOrder}/>,
      6: <SpecialOfferPage openDetails={this.ViewProductDetails}/>
    };

    return (
      <HashRouter basename='/'>
      <div className="App">
        <NavMenu OnChange={this.SetSiteState}/>
        {siteMap[this.state.siteState]}
      </div>
      </HashRouter>
    );
  }
}

export default App;
