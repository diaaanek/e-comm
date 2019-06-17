import React from "react";

const Header = () => (
  <header>
    <div className="hero_wrapper">
      <div className="logo" />

      <div className="hero_image_container">
        <div className="hero__details">
          <h1>New Arrivals</h1>
          <p>
            <div>Shop curated brands and city essentials, all in one place</div>
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

export default Header;
