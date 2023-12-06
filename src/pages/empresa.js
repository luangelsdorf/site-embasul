import Slider from "react-slick";

export default function Company() {

  let settings = {
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    slide: 'article',
    centerMode: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <article>
          <div style={{ margin: '0 12px' }}>
            <h3 style={{ height: '500px', backgroundColor: 'grey' }}>1</h3>
          </div>
        </article>
        <article>
          <div style={{ margin: '0 12px' }}>
            <h3 style={{ height: '500px', backgroundColor: 'red' }}>2</h3>
          </div>
        </article>
        <article>
          <div style={{ margin: '0 12px' }}>
            <h3 style={{ height: '500px', backgroundColor: 'blue' }}>3</h3>
          </div>
        </article>
        <article>
          <div style={{ margin: '0 12px' }}>
            <h3 style={{ height: '500px', backgroundColor: 'green' }}>4</h3>
          </div>
        </article>
        <article>
          <div style={{ margin: '0 12px' }}>
            <h3 style={{ height: '500px', backgroundColor: 'tomato' }}>5</h3>
          </div>
        </article>
        <article>
          <div style={{ margin: '0 12px' }}>
            <h3 style={{ height: '500px', backgroundColor: 'purple' }}>6</h3>
          </div>
        </article>
      </Slider>
    </div>
  );
}
