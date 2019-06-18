import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="hero_wrapper">
          <div className="logo" />
          <div className="theme-button" onClick={this.props.switchTheme}>
            <img
              src="https://www.emoji.co.uk/files/emoji-one/activity-emoji-one/1706-artist-palette.png"
              style={{
                height: "50px",
                width: "50px",
                float: "right",
                display: "inline",
                cursor: "pointer",
                marginRight: "25px"
              }}
              alt="theme-swticher"
            />
          </div>

          <div className="hero_image_container">
            <div className="hero__details">
              <h1>New Arrivals</h1>
              <p>
                <div>
                  Shop curated brands and city essentials, all in one place
                </div>
              </p>
              <div className="hero_button_container">
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
