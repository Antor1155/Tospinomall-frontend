"use client"
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="relative h-lvh border border-black ">


            <Slider {...settings}>

                <div className="bg-tospino font-bold text-center ">
                    <div>
                        <p>We're In This Business Since 2018 And We Provide The Best Services.</p>

                        <p>Ghana's Premier Online <br /> Shopping Destination</p>

                        <p>Better Lifestyle with High-End Online Shopping</p>
                    </div>

                    <div>
                        <Image
                            src="/images/carouselModel1.png"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>


                <div className="bg-tospino font-bold text-center">
                    <h3>2</h3>
                </div>

            </Slider>
        </div>
    );
}

export default Carousel;