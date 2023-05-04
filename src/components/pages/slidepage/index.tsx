import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PageImages } from '../../../assets/images';
import './styles.scss';

const SlideHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable auto sliding
    autoplaySpeed: 100, // set the time between each slide
    cssEase: 'ease-in-out', // set the animation easing
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="wrapper">
      <div className="slide">
        <Slider {...settings}>
          <div>
            <img src={PageImages.house1} alt="house 1"/>
          </div>
          <div>
            <img src={PageImages.house2} alt="house 2"/>
          </div>
          <div>
            <img src={PageImages.house3} alt="house 3"/>
          </div>
        </Slider>
        <div className="content">
          LOLOOOO
        </div>
      </div>
    </div>
  );
};

export default SlideHome;
