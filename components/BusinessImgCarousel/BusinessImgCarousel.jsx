"use client"
import Image from "next/image";
import Slider from "react-slick";

import "./BusinessImgCarousel.css"

const BusinessImgCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

    };
    return (
        <div className="" id="business-carousel">

            <Slider {...settings}>

                <section >
                    <div className="h-96 w-full relative">
                        <Image
                            src="/images/businessMeeting.png"
                            fill
                            priority={true}
                        />
                    </div>
                </section>

                <section>
                    <div className="h-96 w-full relative">
                        <Image
                            src="/images/businessMeeting.png"
                            fill
                            priority={true}
                        />
                    </div>
                </section>
            </Slider>
        </div>
    );
};

export default BusinessImgCarousel;