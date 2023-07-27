import Slider from 'react-slick';
import '../style/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { sliders } from '../data';

const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: true,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      />
    );
  }
  return (
    <div className='mainBox'>
      <h1>Image Slider</h1>
      <Slider {...settings} className='slider-img'>
        {sliders.map(({ id, name, description, img, code, demo }) => (
          <article key={id}>
            <div className='img-container'>
              <img src={img} alt={name} />
            </div>
            <div className='portfolio-project-data'>
              <div className='portfolio-project-name'>{name}</div>
              <div className='portfolio-project-description'>{description}</div>
              <div className='portfolio-project-btn'>
                <button className='portfolio-project-github-btn'>
                  <a href={code} className='gitHub-icon'>
                    <FiGithub />
                  </a>
                </button>
                <button className='portfolio-project-host-btn'>
                  <a href={demo} className='demo-icon'>
                    <BsBoxArrowUpRight />
                  </a>
                </button>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
