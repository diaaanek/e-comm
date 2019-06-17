import React, { Component } from "react";

import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";

import "./App.scss";
// import "./Dark.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "light",
      size: "",
      sort: "",
      cartItems: [],
      products: [],
      filteredProducts: []
    };
  }
  componentWillMount() {
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }

    // fetch("http://localhost:8000/products")
    //   .then(res => res.json())
    //   .catch(err =>
    fetch(
      "https://gist.githubusercontent.com/diaaanek/a32f9928163c9c8cf0dfcefbccbb3e0a/raw/11cec91a45384756fcaa3b373e94ed6180ecd1e1/products.json"
    )
      .then(res => res.json())
      .then(data => data.products)

      .then(data => {
        this.setState({ products: data });
        this.listProducts();
      });
  }

  //
  // Change Themes
  // toggleTheme = () => {
  //   this.setState({
  //     theme: this.state.theme === themes.dark ? themes.light : themes.dark
  //   });
  // };

  switchTheme = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  };

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowestprice"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          )
        };
      }
      return { filteredProducts: state.products };
    });
  };
  handleSortChange = e => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };

  render() {
    let appClass = `App theme-${this.state.theme}`;
    return (
      <div className={appClass}>
        <Header />
        <button className="theme-button" onClick={this.switchTheme}>
          <img
            src="https://www.emoji.co.uk/files/emoji-one/activity-emoji-one/1706-artist-palette.png"
            style={{ height: "50px", width: "50px", float: "right" }}
            alt="theme-swticher"
          />
        </button>

        <div class="product_wrapper">
          <section class="clearfix">
            <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />

            <div class="product_container">
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
              />
            </div>
          </section>
        </div>

        <div className="new" />
      </div>
    );
  }
}

export default App;
