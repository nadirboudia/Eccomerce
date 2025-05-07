
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router'
import 'swiper/css/pagination';
import '../pages/slider.css';
import banner1 from '../images/React Ecommerce Reda Tech/img/banner_Hero1.jpg'
import banner2 from '../images/React Ecommerce Reda Tech/img/banner_Hero2.jpg'
import banner3 from '../images/React Ecommerce Reda Tech/img/banner_Hero3.jpg'

function Heroslider() {
  return (
    <div className='hero'>
      <div className='container'>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide >
      <div className="slide">
    <img src={banner1} alt="" className="slide-img" />
    <div className="content">
      <h4>Introducing The New</h4>
      <h3>Microsoft Xbox <br /> 360 controller</h3>
      <p>Windows Xp/10/7/8 ps3 , Tv Box</p>
      <Link to="/" className="btn">Shop Now</Link>
    </div>
  </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="slide">
    <img src={banner2} alt="" className="slide-img" />
    <div className="content">
      <h4>mini-x6u speaker</h4>
      <h3>led bluetooth <br /> speaker lamp</h3>
      <p>upport 3.5 mm jack audio  input</p>
      <Link to="/" className="btn">Shop Now</Link>
    </div>
  </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="slide">
    <img src={banner3} alt="" className="slide-img" />
    <div className="content">
      <h4>new arrival</h4>
      <h3>Xiaomi air 75 <br />earbuds</h3>
      <p>AAC Hd Sound Quality </p>
      <Link to="/" className="btn">Shop Now</Link>
    </div>
  </div>
       </SwiperSlide>
      </Swiper>
    </div>

    </div>
  )
}

export default Heroslider
