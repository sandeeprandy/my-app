"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      text: `"Avyya's skincare range has been such a treat for my skin! The cleanser thoroughly removes dirt and
      impurities while leaving my skin feeling soft and nourished. The toner and serum work beautifully
      together, providing deep hydration and nourishment. The SPF-moisturizer is the perfect finishing
      touch, keeping my skin hydrated and protected from the sun all day long. My skin has never felt so
      clean, nourished, and cared for! has context menu"`,
      img: "tmuser-2.webp",
      name: "Mahima Raj Chauhan",
    },
    {
      text: `"Avyya's skincare range has been such a treat for my skin! The cleanser thoroughly removes dirt and
      impurities while leaving my skin feeling soft and nourished. The toner and serum work beautifully
      together, providing deep hydration and nourishment. The SPF-moisturizer is the perfect finishing
      touch, keeping my skin hydrated and protected from the sun all day long. My skin has never felt so
      clean, nourished, and cared for! has context menu"`,
      img: "tmuser-2.webp",
      name: "Mahima Raj Chauhan",
    },
  ];

  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2>Testimonials</h2>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="tm-slider"
              spaceBetween={30}
              slidesPerView={1}
            >
              {testimonials.map((tm, index) => (
                <SwiperSlide key={index} className="tm-slide">
                  <div className="slide-up">
                    <p>{tm.text}</p>
                  </div>
                  <div className="tm-header">
                    <img src={`/images/${tm.img}`} className="img-fluid" alt={tm.name} />
                    <div className="tm-name">
                      <span className="star-full"></span>
                      <span className="star-full"></span>
                      <span className="star-full"></span>
                      <span className="star-full"></span>
                      <span className="star-full"></span>
                      <h4>{tm.name}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
