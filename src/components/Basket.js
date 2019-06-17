import React, { Component } from "react";
import util from "../util";
export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="showfilter">
        <h3 class="filterheader">Your Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <h3 class="filterheader"> "Basket is empty" </h3>
        ) : (
          <div class="filterheader">
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="cart-items">
            <ul class="browser__list" style={{ marginLeft: 10 }}>
              {cartItems.map(item => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: "right" }}
                    className="remove-btn"
                    onClick={e => this.props.handleRemoveFromCart(e, item)}
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)}
                </li>
              ))}
            </ul>

            <b style={{ marginLeft: 25 }}>
              Sum:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>

            <button
              className="add-btn"
              onClick={() => alert("Todo: Implement checkout page.")}
            >
              checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}

//
// <div class="showfilter">
//   <h3 class="filterheader">Your Shopping Cart</h3>
//   <ul class="browser__list">
//     <li>Recent Release</li>
//     <li class="active">Netflix Originnal</li>
//     <li>Action</li>
//     <li>Horro</li>
//   </ul>
// </div>
