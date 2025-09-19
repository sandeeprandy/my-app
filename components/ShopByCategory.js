'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ShopByCategory() {
  return (
    <section className="shop-by-category">
      <div className="container">
        <h2>Shop by Category</h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="category-slider"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide>
            <div className="sbc-item">
              <img src="images/hair-cat.jpg" alt="Hair Category" className="img-fluid" />
              <a href="#">SHOP BY HAIR</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sbc-item">
              <img src="images/face-cat.jpg" alt="Face Category" className="img-fluid" />
              <a href="#">SHOP BY FACE</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sbc-item">
              <img src="images/body-cat.jpg" alt="Body Category" className="img-fluid" />
              <a href="#">SHOP BY BODY</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sbc-item">
              <img src="images/aroma-cat.jpg" alt="Aroma Category" className="img-fluid" />
              <a href="#">SHOP BY AROMA</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sbc-item">
              <img src="images/scent-cat.jpg" alt="Scent Category" className="img-fluid" />
              <a href="#">SHOP BY SCENT</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sbc-item">
              <img src="images/scent-cat.jpg" alt="Scent Category" className="img-fluid" />
              <a href="#">SHOP BY SCENT</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sbc-item">
              <img src="images/scent-cat.jpg" alt="Scent Category" className="img-fluid" />
              <a href="#">SHOP BY SCENT</a>
            </div>
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
