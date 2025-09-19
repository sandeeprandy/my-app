'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchPopup from './Popups/SearchPopup';
import UserPopup from './Popups/UserPopup';
import CartPopups from './Popups/temp';

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

   
  const toggleUser = () => setIsUserOpen((prev) => !prev);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <nav>
      {/* Banner */}
      <div className="header-banner">
        <div className="moving-text">
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
           <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
          <span>Get 10% OFF on your first order</span>
        </div>
      </div>

      {/* Nav */}
      <div className="nav-wrapper container">
        <div className="logo">
          <Link href="#">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={100}
              height={40}
              className="img-fluid"
            />
          </Link>
        </div>

        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />

        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <span className="bitcoin-icons--cross-filled"></span>
          </label>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Skin Care</Link></li>
          <li>
            <Link href="#" className="desktop-item">Hair Care</Link>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">Hair Care</label>
            <ul className="drop-menu">
              <li><Link href="#">Drop menu 1</Link></li>
              <li><Link href="#">Drop menu 2</Link></li>
              <li><Link href="#">Drop menu 3</Link></li>
              <li><Link href="#">Drop menu 4</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#" className="desktop-item">Bodycare</Link>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">Bodycare</label>
            <div className="mega-box">
              <div className="content row">
                <div className="col-lg-3">
                  <h3>Body Wash</h3>
                  <ul className="mega-links">
                    <li><Link href="#">Graphics</Link></li>
                    <li><Link href="#">Vectors</Link></li>
                    <li><Link href="#">Business cards</Link></li>
                    <li><Link href="#">Custom logo</Link></li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <h3>Body Lotion</h3>
                  <ul className="mega-links">
                    <li><Link href="#">Personal Email</Link></li>
                    <li><Link href="#">Business Email</Link></li>
                    <li><Link href="#">Mobile Email</Link></li>
                    <li><Link href="#">Web Marketing</Link></li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <h3>Moisturizer</h3>
                  <ul className="mega-links">
                    <li><Link href="#">Personal Email</Link></li>
                    <li><Link href="#">Business Email</Link></li>
                    <li><Link href="#">Mobile Email</Link></li>
                    <li><Link href="#">Web Marketing</Link></li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <Image
                    src="/images/p1.jpg"
                    alt="Product"
                    width={200}
                    height={200}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </li>
          <li><Link href="#">Lifestyle</Link></li>
          <li><Link href="#">Combos</Link></li>
          <li><Link href="#">Contact Us</Link></li>
        </ul>

        {/* Icons */}
        <div className="header-icons">
  <ul className="nav-icons">
    <li>
      <Link href="#" onClick={(e) => { e.preventDefault(); setOpenSearch(true); }}>
        <span className="prime--search">Search</span>
      </Link>
    </li>
    <li>
      <Link href="#" onClick={(e) => { e.preventDefault(); setIsUserOpen(true); }}>
        <span className="la--user">User</span>
      </Link>
    </li>
    <li>
      <Link href="#">
        <span className="wishlist-icon-header">Wishlist</span>
      </Link>
    </li>
    <li className="nav-cart">
      <Link href="#" onClick={(e) => { e.preventDefault(); toggleCart(); }}>
        <span className="fluent--cart-16-regular">Cart</span>
        <span className="cart-count">3</span>
      </Link>
    </li>
  </ul>

  <label htmlFor="menu-btn" className="btn menu-btn">
    <span className="mdi--hamburger-menu"></span>
  </label>
</div>

      </div>

      {/* Popups */}
      {openSearch && (
        <SearchPopup
          onClose={() => setOpenSearch(false)}
          isOpen={openSearch}  
        />)}
     {isUserOpen && (
  <UserPopup
    onClose={() => setIsUserOpen(false)}
    isOpen={isUserOpen}
  />
)}
     {isCartOpen && (
        <CartPopups isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      )}
    </nav>
  );
}
