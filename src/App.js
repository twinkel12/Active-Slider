
import React from "react";
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // initialSlide: 0,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
  <>
    <div className="slider-container">
      <div class="text-center font-bold text-2xl p-2 underline decoration-wavy text-white">Wild Life Photography</div>
      <Slider {...settings}>
        <div>
          <img src="https://th.bing.com/th/id/OIP.JVRMn0KHiQqaOBPcV86hfAHaFK?rs=1&pid=ImgDetMain" className='h-80 border-solid border-2 border-black' alt="" />
        </div>
        <div>
          <img src="https://getwallpapers.com/wallpaper/full/5/a/1/151812.jpg" className='h-80 border-solid border-2 border-black ' alt="" />
        </div>
        <div>
          <img src="https://getwallpapers.com/wallpaper/full/f/6/2/316502.jpg" className='h-80 border-solid border-2 border-black' alt="" />
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.pY-m68ZYPa2O0vsBw0YzwgHaE7?rs=1&pid=ImgDetMain" className='h-80 border-solid border-2 border-black' alt="" />
        </div>
        <div>
          <img src="https://wallup.net/wp-content/uploads/2016/01/95972-lion-nature-animals-baby_animals.jpg" className='h-80 border-solid border-2 border-black' alt="" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2018/02/18/13/10/nature-3162233_960_720.jpg" className='h-80 border-solid border-2 border-black' alt="" />
        </div>
        <div>
          <img src="https://getwallpapers.com/wallpaper/full/5/8/7/151898.jpg" className='h-80 border-solid border-2 border-black' alt="" />
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.i4eaybocfkrAyz3Iy9E6vAHaFj?pid=ImgDet&w=474&h=355&rs=1" className='h-80 border-solid border-2 border-black' alt="" />
        </div>
      </Slider>
    </div>
     <Footer />
   </>
  ); 
}

export default App;
