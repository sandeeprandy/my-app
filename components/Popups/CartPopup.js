'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function CartPopups({ isOpen, onClose }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Avyya Essential Toner', variant: '1000ml', price: 1599, qty: 1, img: '/images/p1.jpg' },
    { id: 2, name: 'Avyya Essential Toner', variant: '500ml', price: 999, qty: 1, img: '/images/p1.jpg' },
    { id: 3, name: 'Avyya Essential Toner', variant: '100ml', price: 699, qty: 1, img: '/images/p1.jpg' },
  ]);

  const incrementQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decrementQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay active" onClick={onClose}></div>

      <div className="cart-container active">
        <div className="cart-header">
          <div className="cart-title">Shopping Cart</div>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-body">
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="row">
                  <div className="col-2">
                    <div className="item-image">
                      <Image src={item.img} alt={item.name} width={80} height={80} />
                    </div>
                  </div>

                  <div className="col-7">
                    <div className="item-details">
                      <div className="item-name">{item.name}</div>
                      <div className="item-variant">{item.variant}</div>
                      <div className="item-price">₹{item.price}</div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button className="quantity-btn" onClick={() => decrementQty(item.id)}>-</button>
                        <span className="quantity-display">{item.qty}</span>
                        <button className="quantity-btn" onClick={() => incrementQty(item.id)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary">
          <div className="cart-actions">
            <div className="price-row total">
              <p>Total</p>
              <p>₹{totalPrice}</p>
            </div>
            <button className="ptc-btn">Check Out</button>
          </div>
        </div>
      </div>
    </>
  );
}
