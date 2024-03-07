"use client"
import BusinessImgCarousel from "@/components/BusinessImgCarousel/BusinessImgCarousel";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const page = () => {
    const [playing, setPlaying] = useState(false)
    const video = useRef()

    const handlePlayPause = () => {
        if (video.current.paused) {
            video.current.play()
            setPlaying(true)
        } else {
            video.current.pause()
            setPlaying(false)
        }
    }

    return (
        <main className="bg-off-white">

            {/* video section  */}
            <section className="relative"
                onClick={handlePlayPause}
            >
                <video ref={video} width="100%" preload="metadata" className="object-fill h-[80vh]">
                    <source src="/videos/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {!playing &&
                    <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <Image
                            src="/icons/videoPlay.svg"
                            width={80}
                            height={80}
                            alt="videoPlay"
                            priority={true}
                        />
                    </button>
                }
            </section>

            {/* our business section  */}
            <section className="px-[5%] my-16  grid grid-cols-1 md:grid-cols-2 gap-y-10  gap-x-10">

                <div className="order-2 md:order-1">
                    <BusinessImgCarousel />
                </div>

                <div className="flex flex-col justify-center ps-8 order-1 md:order-2">
                    <h1 className="text-5xl font-semibold">Our Business</h1>
                    <p className="my-8">
                        TospinoMall is a leading e-commerce platform in Ghana. It was founded in 2018. TospinoMall has been growing rapidly since its launch in January 2021. The 2021 Shenzhen cross-border e-commerce trading expo was a big success for TospinoMall. Many popular international brands, local brands, and entrepreneurs are associated with Tospinomol. According to a leading web analytics company, TospinoMall is ranked 4th in Ghana based on downloads and users on the Google Play Store.
                    </p>

                    <button className="btn bg-tospino-btn mr-auto border-tospino shadow-xl"> Learn More</button>
                </div>
            </section>

            {/* business card section  */}
            <section className="px-[5%] mb-16 text-black grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="card w-full">
                    <figure>
                        <Image
                            src="/images/aboutCard.png"
                            width={200}
                            height={200}
                            alt="about us"
                            className="w-full"
                        />
                    </figure>
                    <div className="">
                        <h2 className="card-title text-2xl mt-4">Serving Consumers</h2>
                        <p className="my-4">
                            TospinoMall is the best online shopping platform in Ghana. It is more than just an online marketplace. You will find everything from your favorite fashion items to essential electronics and daily essentials here. It is a platform where you get all the products you need in one place. With a single click, you will get your products at your door. We always strive to create new experiences for our customers. TospinoMall is always working towards an easy and safe online shopping experience for all people in Ghana.
                        </p>
                        <Link href="/" className="text-tospino-text font-semibold">
                            Discover
                            <Image
                                src="/icons/rightArrow.svg"
                                width={13}
                                height={13}
                                alt="right arrow"
                                className="inline ml-3"
                            />
                        </Link>

                    </div>
                </div>

                <div className="card w-full">
                    <figure>
                        <Image
                            src="/images/aboutCard2.png"
                            width={200}
                            height={200}
                            alt="about us"
                            className="w-full"
                        />
                    </figure>
                    <div className="">
                        <h2 className="card-title text-2xl mt-4">Empowering Businesses</h2>
                        <p className="my-4">
                            We are always empowering Ghana's small businesses and entrepreneurs to grow their businesses and Ghana's e-commerce growth. Hundreds of entrepreneurs and local companies accompany TospinoMall, significantly contributing to the advancement of e-commerce in Ghana. We build an easy and secure platform for all local businesses and entrepreneurs in Ghana where everyone can easily run and manage their business online.
                        </p>
                        <Link href="/" className="text-tospino-text font-semibold">
                            Discover
                            <Image
                                src="/icons/rightArrow.svg"
                                width={13}
                                height={13}
                                alt="right arrow"
                                className="inline ml-3"
                            />
                        </Link>

                    </div>
                </div>

            </section>

            {/* stats section  */}
            <section className="bg-[url('/images/statsBackground.png')] bg-cover grid grid-cols-2 md:grid-cols-3 px-[5%] py-5">

                <div className="stat text-center text-lg w-auto">
                    <div className="stat-value">100k+</div>
                    <div className="stat-title text-black ">Visits on the website in 2022</div>
                </div>
                <div className="stat text-center text-xl w-auto">
                    <div className="stat-value">100k+</div>
                    <div className="stat-title text-black">Active Sellers</div>
                </div>
                <div className="stat text-center text-xl w-auto">
                    <div className="stat-value">100k+</div>
                    <div className="stat-title text-black">One transaction is done</div>
                </div>
                <div className="stat text-center text-xl w-auto">
                    <div className="stat-value">100k+</div>
                    <div className="stat-title text-black">Orders in 2022</div>
                </div>
                <div className="stat text-center text-xl w-auto">
                    <div className="stat-value">100k+</div>
                    <div className="stat-title text-black">Products</div>
                </div>
                <div className="stat text-center text-xl w-auto">
                    <div className="stat-value">100k+</div>
                    <div className="stat-title text-black">Active Consumers across Africa</div>
                </div>

            </section>

        </main >
    );
};

export default page;