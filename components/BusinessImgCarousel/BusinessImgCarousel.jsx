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

                <Image
                    src="/images/businessMeeting.png"
                    width={1000}
                    height={1000}
                />

                <Image
                    src="/images/businessMeeting.png"
                    width={1000}
                    height={1000}
                />

            </Slider>
        </div>
    );
};

export default BusinessImgCarousel;