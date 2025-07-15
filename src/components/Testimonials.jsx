import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <>
      <section className="Testimonial-section">
        <div className="testimonial-carousel-container">
          <h2 className="testimonial-heading">Testimonial</h2>

          <div className="testimonial-nav-buttons">
            <button className="swiper-prev">❮</button>
            <button className="swiper-next">❯</button>
          </div>

         <Swiper
  modules={[Navigation]}
  spaceBetween={20}
  slidesPerView={1}
  loop={true} 
  navigation={{
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  }}
  onInit={(swiper) => {
    swiper.params.navigation.prevEl = ".swiper-prev";
    swiper.params.navigation.nextEl = ".swiper-next";
    swiper.navigation.init();
    swiper.navigation.update();
  }}
>
  <SwiperSlide>
    <Testimonial />
  </SwiperSlide>
  <SwiperSlide>
    <Testimonial />
  </SwiperSlide>
  <SwiperSlide>
    <Testimonial />
  </SwiperSlide>
</Swiper>

        </div>
      </section>
    </>
  );
};

export default Testimonials;
