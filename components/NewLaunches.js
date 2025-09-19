"use client";

export default function NewLaunches() {
  const products = [
    { front: "p1.jpg", back: "flip.webp", name: "Shower Gel", price: "₹799.00" },
    { front: "p1.jpg", back: "flip.webp", name: "Shower Gel", price: "₹799.00" },
    { front: "p2.jpg", back: "flip.webp", name: "Shower Gel", price: "₹799.00" },
    { front: "p1.jpg", back: "flip.webp", name: "Shower Gel", price: "₹799.00" },
    { front: "p2.jpg", back: "flip.webp", name: "Shower Gel", price: "₹799.00" },
    { front: "p1.jpg", back: "flip.webp", name: "Shower Gel", price: "₹799.00" },
    { front: "p1.jpg", back: "flip.webp", name: "Shower Gel", price: "₹799.00" },
    { front: "p2.jpg", back: "flip.webp", name: "Shower Gel", price: "₹799.00" },
  ];

  return (
    <section className="new-launches overflow-hidden">
      <div className="container">
        <h2>New Launches</h2>

        <div className="row gx-4 gy-5">
          {products.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="product-card">
                <div className="product-image">
                  <div className="image-flip-container">
                    <div className="image-front">
                      <img src={`/images/${product.front}`} alt={`${product.name} Front`} />
                    </div>
                    <div className="image-back">
                      <img src={`/images/${product.back}`} alt={`${product.name} Back`} />
                    </div>
                  </div>
                  <span className="wishlist-icon"></span>
                </div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price}</div>
                  <button className="add-to-cart">ADD TO CART</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
