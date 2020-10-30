import React from 'react';

import NavMenu from './components/NavMenu';
import HomePage from './components/Home';
import ProductPage from './components/Products';
import AboutPage from './components/About';
import DetailPage from './components/ProductDetail';
import CartOrderDetailPage from './components/CartOrderDetail';
import CartPage from './components/Cart';
import SpecialOfferPage from './components/SpecialOffer';

import { HashRouter } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar'; 
import MuiAlert from '@material-ui/lab/Alert';

import './App.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      itemID: 0,
      siteState: 0,
      previousState: 0,
      focusProduct: null,
      shoppingCart: [],
      wishlist: [],
      alertOpen: false,
      alertMsg: ""
    }

    // Navigation
    this.SetSiteState = this.SetSiteState.bind(this);
    this.ViewProductDetails = this.ViewProductDetails.bind(this);

    // Shopping Cart
    this.AddToCart = this.AddToCart.bind(this);
    this.RemoveCartOrder = this.RemoveCartOrder.bind(this);
    this.UpdateCartOrder = this.UpdateCartOrder.bind(this);
    this.ClearCart = this.ClearCart.bind(this);

    // Wishlist
    this.AddToWishlist = this.AddToWishlist.bind(this);
    this.RemoveWishlistItem = this.RemoveWishlistItem.bind(this);
    this.AddWishToCart = this.AddWishToCart.bind(this);

    // Alert Messages
    this.ShowAlert = this.ShowAlert.bind(this);
    this.HideAlert = this.HideAlert.bind(this);
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
  AddToCart(order, id = -1) {
    console.log("New Order: ", order);
    let {amount, glaze, product} = order;
    let temp = this.state.shoppingCart;

    temp.push({
      id: this.state.itemID,
      amount: amount,
      glaze: glaze,
      product: product
    });

    this.setState((state, props) => ({
      shoppingCart: temp,
      itemID: this.state.itemID+1
    }), () => {this.SetSiteState(this.state.previousState); this.ShowAlert("Added item to cart")});
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
    }), () => {this.SetSiteState(3); this.ShowAlert("Removed item from cart")});
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
    }), () => {this.SetSiteState(3); this.ShowAlert("Updated your cart item")});
  }

  ClearCart() {
    this.setState((s, p) => ({
      shoppingCart: []
    }), () => {this.SetSiteState(3); this.ShowAlert("Successfully purchased all items in cart!")});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  /// WISHLIST
  //////////////////////////////////////////////////////////////////////////////////////////////////
  AddToWishlist(order) {
    console.log("New Wishlist Item: ", order);
    let {amount, glaze, product} = order;
    let temp = this.state.wishlist;

    temp.push({
      id: this.state.itemID+1,
      amount: amount,
      glaze: glaze,
      product: product
    });

    this.setState((state, props) => ({
      wishlist: temp
    }), () => {this.SetSiteState(1); this.ShowAlert("Added item to wishlist")});
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
    }), () => {this.SetSiteState(3); this.ShowAlert("Removed wish from wishlist")});
  }

  AddWishToCart(order) {
    console.log("Adding Wishlist Item to Cart: ", order);
    let {id, amount, glaze, product} = order;
    let temp = this.state.shoppingCart;

    temp.push({
      id: id,
      amount: amount,
      glaze: glaze,
      product: product
    });

    this.setState((state, props) => ({
      shoppingCart: temp
    }), () => {this.RemoveWishlistItem(id)});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  /// ALERT MESSAGES
  //////////////////////////////////////////////////////////////////////////////////////////////////
  ShowAlert(msg) {
    this.setState((state, props) => ({
      alertMsg: msg,
      alertOpen: true
    }));
  }

  HideAlert() {
    this.setState((state, props) => ({
      alertOpen: false
    }));
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  /// RENDER
  //////////////////////////////////////////////////////////////////////////////////////////////////
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
                   moveWish={this.AddWishToCart}
                   payItems={this.ClearCart}/>,
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
        <NavMenu OnChange={this.SetSiteState} CartNum={this.state.shoppingCart.length}/>
        {siteMap[this.state.siteState]}
      </div>
      <Snackbar
        autoHideDuration={3000}
        open={this.state.alertOpen}
        onClose={this.HideAlert}>
          <Alert onClose={this.HideAlert} severity="success">
            {this.state.alertMsg}
          </Alert>
      </Snackbar>
      </HashRouter>
    );
  }
}

export default App;
