'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


export default function ShopByConcern() {
  return (
    <section className="shop-by-concern">
      <div className="container">
        <h2>Shop by Concern</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="concern-slider"
        >
          <SwiperSlide>
            <div className="row shop-by-concern-img">
              <div className="col-6 sbc-acne">
                <a href="#">Acne & Breakouts</a>
              </div>
              <div className="col-6 sbc-lines">
                <a href="#">Fine Lines</a>
              </div>
              <div className="col-6 sbc-pigmentation">
                <a href="#">Pigmentation</a>
              </div>
              <div className="col-6 sbc-dry">
                <a href="#">Dehydrated & Dry</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row shop-by-concern-hair-bimg">
              <div className="col-6 sbc-dry-air">
                <a href="#">Dry Hair</a>
              </div>
              <div className="col-6 sbc-freezy-hair">
                <a href="#">Freezy Hair</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}