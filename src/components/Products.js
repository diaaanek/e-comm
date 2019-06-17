import React, { Component } from "react";

import util from "../util";
export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div className="Item" key={product.id}>
        <a
          href={`#${product.id}`}
          onClick={e => this.props.handleAddToCart(e, product)}
        >
          <div className="ImageContainer">
            <img
              className="ImageContainer"
              src={`products/${product.id}-b.jpg`}
              alt={product.title}
            />
          </div>
        </a>

        <div className="Item__title">{product.title}</div>

        <div class="Item__price">
          {util.formatCurrency(product.price)}.00 USD{" "}
        </div>

        <button
          className="cart add-btn"
          onClick={e => this.props.handleAddToCart(e, product)}
        >
          Add To Cart
        </button>
      </div>
    ));

    return <div className="Items">{productItems}</div>;
  }
}
