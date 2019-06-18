import React, { Component } from "react";
import util from "../util";
export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="show-basket">
        <h3 class="basket-header">Your Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <h3 class="basket-header"> "Basket is empty" </h3>
        ) : (
          <div class="basket-header">
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="cart-items">
            <ul class="cart-list" style={{ marginLeft: 10 }}>
              {cartItems.map(item => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <div
                    style={{ float: "right", cursor: "pointer" }}
                    className="remove-btn"
                    onClick={e => this.props.handleRemoveFromCart(e, item)}
                  >
                    X
                  </div>
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
              style={{
                marginLeft: "3.3em",
                marginTop: "1em",
                marginBottom: "1em"
              }}
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
