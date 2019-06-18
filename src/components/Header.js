import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="hero-wrapper">
          <div className="logo" />
          <div className="theme-button" onClick={this.props.switchTheme}>
            <img
              src="https://www.emoji.co.uk/files/emoji-one/activity-emoji-one/1706-artist-palette.png"
              alt="theme-swticher"
            />
          </div>

          <div className="hero-image-container">
            <div className="hero-details">
              <h1>New Arrivals</h1>
              <p>
                <div>
                  Shop curated brands and city essentials, all in one place
                </div>
              </p>
              <div className="hero-button">
                <button>View Collection</button>
                <button>My Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
