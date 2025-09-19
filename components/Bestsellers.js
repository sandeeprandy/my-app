"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// ✅ Add your CSS file

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState("skincare");

  const tabs = ["skincare", "haircare", "bodycare", "aroma", "scent"];

  return (
    <section className="best-sellers">
      <div className="container">
        <h2 className="bs-title">OUR BESTSELLERS</h2>

        {/* Tabs */}
        <div className="bs-tab-nav">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`bs-tab-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "skincare" && (
          <div className="bs-tab-content active">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1} // ✅ Show only 1 slide
            >
              <SwiperSlide>
                <div className="bs_product">
                  <img src="/images/bs1.png" alt="Shower Gel" className="bs_product-img" />
                  <div className="bs_product-details">
                    <div className="product-name">Shower Gel</div>
                    <div className="product-price">₹799.00</div>
                    <button className="add-to-cart">ADD TO CART</button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bs_product">
                  <img src="/images/bs2.png" alt="Face Wash" className="bs_product-img" />
                  <div className="bs_product-details">
                    <div className="product-name">Face Wash</div>
                    <div className="product-price">₹599.00</div>
                    <button className="add-to-cart">ADD TO CART</button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bs_product">
                  <img src="/images/bs3.png" alt="Hair Oil" className="bs_product-img" />
                  <div className="bs_product-details">
                    <div className="product-name">Hair Oil</div>
                    <div className="product-price">₹499.00</div>
                    <button className="add-to-cart">ADD TO CART</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== "skincare" && (
          <div className="bs-tab-content active">
            <p>Products for {activeTab} coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
}
