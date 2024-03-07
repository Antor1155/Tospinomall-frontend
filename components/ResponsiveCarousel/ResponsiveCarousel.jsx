"use client"
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "./responsiveCarousel.css"

const ResponsiveCarousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
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
        <div id="responsive-carousel" className="mx-auto w-11/12 -mt-9">
            <Slider {...settings} className="flex ">
                <section>
                    <div className="card card-compact h-96 bg-white border-2 rounded-xl shadow-xl">
                        <figure className="pt-1 px-1">
                            <Image
                                src="/images/card1.png"
                                width={400}
                                height={400}
                                alt="community support"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Community Support</h2>
                            <p>TospinoMall has a dedicated customer service team that works to resolve any customer issue at every step.</p>

                            <Link href="/" className="text-tospino-text">LEARN MORE</Link>


                        </div>
                    </div>
                </section>

                <section>
                    <div className="card card-compact h-96 bg-white border-2 rounded-xl shadow-xl">
                        <figure className="pt-1 px-1">
                            <Image
                                src="/images/card2.png"
                                width={400}
                                height={400}
                                alt="Our Impact"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Our Impact</h2>
                            <p>Tospinomall influences local businesses. Tospinomall provides a platform for local entrepreneurs and small businesses to showcase their products to a bigger audience.</p>

                            <Link href="/" className="text-tospino-text">LEARN MORE</Link>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="card card-compact h-96 bg-white border-2 rounded-xl shadow-xl">
                        <figure className="pt-1 px-1">
                            <Image
                                src="/images/card3.png"
                                width={400}
                                height={400}
                                alt="Customer Engagement"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Customer Engagement</h2>
                            <p>Give consumers a better purchasing experience by providing them with customized recommendations and loyality rewards.</p>

                            <Link href="/" className="text-tospino-text">LEARN MORE</Link>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="card card-compact h-96 bg-white border-2 rounded-xl shadow-xl">
                        <figure className="pt-1 px-1">
                            <Image
                                src="/images/card4.png"
                                width={400}
                                height={400}
                                alt="Sustainability"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Sustainability</h2>
                            <p>Since 2018 TospinoMall serves the best shopping experience in Ghana. Most of chinese and local sellers are on our app. </p>

                            <Link href="/" className="text-tospino-text">LEARN MORE</Link>

                        </div>
                    </div>
                </section>

                
            </Slider>

        </div>
    );
};

export default ResponsiveCarousel;