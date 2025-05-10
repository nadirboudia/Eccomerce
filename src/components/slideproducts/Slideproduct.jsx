import React from 'react';
import Product from './Product';
import './slidproduct.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';

function Slideproduct({ data=[], title , description }) {
  return (
    <div className="slideproduct slide">
      <div className="container">
        <div className="topslide">
          <h2>{title}</h2>
          <p>
          {description}
          </p>
        </div>
       {data.length>=2 ? ( <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, FreeMode, Pagination]}
          className="mySwiper"
        >
      {data.map((item, index) => (
  <SwiperSlide key={item.id || index}>
    <Product New={item} />
  </SwiperSlide>
))}
        </Swiper>): (
          <p>waiting for data</p>
        ) }
      </div>
    </div>
  );
}

export default Slideproduct;
