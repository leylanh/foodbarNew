import './Carousel.css';
import ReactSimplyCarousel from 'react-simply-carousel';
import { useState } from 'react';
function ReactSimplyCarouselExample() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}

                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        minWidth: 768,
                        autoplay: true,
                        autoplayDelay: 2000
                    },
                ]}
                speed={400}


            >
                
                <div className='row'>
                    <img src='https://preview.colorlib.com/theme/foodbar/img/testimonials/testi-1.jpg.webp' alt='' style={{ width: 300, height: 300 }} />
                    <div className='info'>
                        <h4>Filipino Gomez</h4>
                        <h5>Web Developer, Google</h5>
                        <p>“Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                        </p>
                    </div>
                </div>
                <div  className='row'>
                    <img src='https://preview.colorlib.com/theme/foodbar/img/testimonials/testi-1.jpg.webp' alt='' style={{ width: 300, height: 300 }} />
                    <div className='info'>
                        <h4>Filipino Gomez</h4>
                        <h5>Web Developer, Google</h5>
                        <p>“Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                        </p>
                    </div>
                </div>


            </ReactSimplyCarousel>
        </div>
    );
}

export default ReactSimplyCarouselExample;