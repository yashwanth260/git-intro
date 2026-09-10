import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="brand">
          <Package className="brand-icon" />
          <span className="brand-name">Aura Shop</span>
        </Link>
        <nav>
          <Link to="/cart" className="cart-link">
            <ShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
