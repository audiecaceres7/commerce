const NavBar = () => {
  return (
    <div className="nav-bar">
      <p className="logo">CodeCommerce</p>
      <ul className="nav-item-container">
        <a>
          <li>Log In</li>
          <li>Sign Up</li>
          <div className="cart-icon-container">
            <div className="cart-number">1</div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
