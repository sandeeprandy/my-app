'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
  return (
    <section className="banner overflow-hidden">
      <div className="container-fluid gx-0">
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="banner-slider"
            >
              <SwiperSlide>
                <div className="banner1">
                  <Image src="/images/dermat-banner.webp" alt="Dermat Banner" width={1400} height={600} className="img-fluid" />
                  <a href="#">Reveal My Treatment</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="banner2">
                  <Image src="/images/banner1.webp" alt="Banner 1" width={1400} height={600} className="img-fluid" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="banner3">
                  <Image src="/images/banner2.webp" alt="Banner 2" width={1400} height={600} className="img-fluid" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="banner4">
                  <Image src="/images/banner3.webp" alt="Banner 3" width={1400} height={600} className="img-fluid" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}