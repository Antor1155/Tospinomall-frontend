"use client"
import Image from "next/image";
import Slider from "react-slick";

import "./Carousel.css"


const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

    };
    return (
        <div className="text-white" id="main-carousel">

            <Slider {...settings} className="bg-tospino">

                <section>

                    <div className="bg-tospino font-bold flex">
                        <div className="w-1/2 py-[5%] ps-20 hidden lg:block">
                            <p className="text-base font-normal">We're In This Business Since 2018 And We Provide The Best Services.</p>

                            <p className="text-5xl leading-snug font-bold my-8">Ghana's Premier Online Shopping Destination</p>

                            <p className="text-xl font-normal mb-8">Better Lifestyle with High-End Online Shopping</p>

                            <button className="text-lg font-medium btn bg-white rounded-lg">ABOUT TOSPINOMALL</button>
                        </div>

                        <div className="relative w-full min-h-96 lg:w-1/2">
                            <Image
                                src="/images/carouselModel1.png"
                                fill
                                priority={true}
                                className="object-contain"
                            />
                        </div>
                    </div>

                </section>

                <section>

                    <div className="bg-tospino font-bold flex">
                        <div className="w-1/2 py-[5%] ps-20 hidden lg:block">
                            <p className="text-base font-normal">We're In This Business Since 2018 And We Provide The Best Services.</p>

                            <p className="text-5xl leading-snug font-bold my-8">We trive to give best experience</p>

                            <p className="text-xl font-normal mb-8">Better Lifestyle with High-End Online Shopping</p>

                            <button className="text-lg font-medium btn bg-white rounded-lg">ABOUT TOSPINOMALL</button>
                        </div>

                        <div className="relative w-full min-h-96 lg:w-1/2">
                            <Image
                                src="/images/carouselModel1.png"
                                fill
                                priority={true}
                                className="object-contain"
                            />
                        </div>
                    </div>

                </section>

            </Slider>

            <div className="px-[5%] py-5 block lg:hidden text-black">
                <p className="text-base font-normal">We're In This Business Since 2018 And We Provide The Best Services.</p>

                <p className="text-5xl leading-snug font-bold my-5">We trive to give best experience</p>

                <p className="text-xl font-normal mb-8">Better Lifestyle with High-End Online Shopping</p>

                <button className="text-lg font-medium btn bg-tospino rounded-lg">ABOUT TOSPINOMALL</button>
            </div>
        </div>
    );
}

export default Carousel;