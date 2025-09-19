'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function SearchPopup({ onClose, isOpen }) {
  const popupRef = useRef(null);
  console.log(isOpen)

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div id="search-bar" className={`search-bar ${isOpen ? 'active' : ''}`} ref={popupRef}>
      {/* Search Box */}
      <div className="search-bar-box">
        <span className="prime--search">🔍</span>
        <input
          type="text"
          id="search-input"
          placeholder="Search by name or ingredients"
        />
      </div>

      {/* Close button */}
      <button onClick={onClose} className="close-btn">
        ✕
      </button>

      {/* Recommendations */}
      <div className="search-products">
        <p><strong>Recommendations</strong></p>

        {[1, 2, 3].map((i) => (
          <div className="search-product-item" key={i}>
            <Image
              src="/images/p1.jpg"
              alt="Product"
              width={100}
              height={100}
              className="img-fluid"
            />
            <div className="spi-meta">
              <p>
                <strong>₹<span>799.00</span> Free</strong>
              </p>
              <p>Face Cleanser</p>
              <div className="stars">
                <span className="ic-star"></span>
                <span className="ic-star"></span>
                <span className="ic-star"></span>
                <span className="ic-star-half"></span>
                <span className="ic-star-blank"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
