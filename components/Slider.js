import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Slider() {
  return (
    <section className="relative mx-auto mt-7 shadow-2xl">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="/assets/images/slider-1.jpg" alt="disney" loading="lazy" />
        </div>
        <div>
          <img src="/assets/images/slider-2.jpg" alt="disney" loading="lazy" />
        </div>
        <div>
          <img src="/assets/images/slider-3.jpg" alt="disney" loading="lazy" />
        </div>
        <div>
          <img src="/assets/images/slider-4.jpeg" alt="disney" loading="lazy" />
        </div>
      </Carousel>
    </section>
  )
}

export default Slider
