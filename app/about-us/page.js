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

                <div className="flex flex-col justify-center ps-0 md:ps-8 order-1 md:order-2">
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
            <section className="bg-[url('/images/statsBackground.png')] bg-cover grid grid-cols-2 md:grid-cols-3 gap-5 px-[5%] py-5">

                <div className=" text-center text-lg w-auto">
                    <div className=" text-3xl md:text-5xl font-bold my-5">100k+</div>
                    <div className="-title text-black text-sm md:text-base">Visits on the website in 2022</div>
                </div>
                <div className=" text-center text-xl w-auto">
                    <div className="text-3xl md:text-5xl font-bold my-5">100k+</div>
                    <div className="text-black text-sm md:text-base ">Active Sellers</div>
                </div>
                <div className=" text-center text-xl w-auto">
                    <div className="text-3xl md:text-5xl font-bold my-5">100k+</div>
                    <div className="text-black text-sm md:text-base">One transaction is done</div>
                </div>
                <div className=" text-center text-xl w-auto">
                    <div className="text-3xl md:text-5xl font-bold my-5">100k+</div>
                    <div className="text-black text-sm md:text-base">Orders in 2022</div>
                </div>
                <div className=" text-center text-xl w-auto">
                    <div className="text-3xl md:text-5xl font-bold my-5">100k+</div>
                    <div className="text-black text-sm md:text-base">Products</div>
                </div>
                <div className=" text-center text-xl w-auto">
                    <div className="text-3xl md:text-5xl font-bold my-5">100k+</div>
                    <div className="text-black text-sm md:text-base">Active Consumers across Africa</div>
                </div>

            </section>

            {/* our purpose section  */}
            <section className="my-16 px-[5%]">
                <div className="text-center w-full md:w-2/3 mx-auto mb-10 md:mb-16">
                    <h2 className="font-semibold text-5xl mb-5">Our Purpose</h2>
                    <p>
                        Our purpose is simple but significant. We are working to improve lives via fantastic shopping experiences. We are a community-driven platform that connects customers with high-quality products, trustworthy sellers, and creative solutions. From daily needs to exclusive finds, we strive to make shopping simple, enjoyable, and satisfying. With a focus on customer satisfaction and empowerment, we aim to build trust and develop long-term partnerships
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="pe-0 md:pe-16">
                        <h2 className="font-semibold text-3xl mb-5">Our Mission</h2>
                        <p>
                            We want to exploit the opportunities that exist to improve the quality of life of the people of Ghana through the use of technology. TospinoMall is working to empower Ghanaian small business people or entrepreneurs to grow their businesses and reach their customers easily through technology. TospinoMall is established to create a safe, easy, one-stop online shopping platform for business people, entrepreneurs, and general consumers.
                        </p>
                    </div>

                    <div className="ps-0 md:ps-16 mt-10 md:mt-0 md:border-l border-black">
                        <h2 className="font-semibold text-3xl mb-5">Our Vision</h2>
                        <p>
                            Our vision is to take TospinoMall higher by exceeding customer expectations. Revolutionizing online shopping in Ghana by providing a seamless and easy experience. Building a reliable platform for all retail and wholesale traders in Ghana, including consumers, through TospinoMall's vast supply chain and manufacturing.
                        </p>
                    </div>
                </div>

            </section>

            {/* our supplier section  */}
            <section className="px-[5%] pb-16 pt-5">
                <h2 className="font-semibold text-5xl text-center mb-7">Our Supplier</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div className="order-2">
                        <h3 className="text-3xl font-semibold mb-5">TospinoMall Logistics</h3>
                        <p>
                            TospinoMall Logistics is the best e-commerce fulfillment and express delivery system in Ghana. It is known as Tospino Express in Ghana, providing fast and secure delivery anywhere in Ghana. “Tospino Express” is always best for the quickest and safest delivery.
                            Any local entrepreneur or small business in Ghana can easily join us. Through Tospino Express, they can deliver their product to the customer in the fastest and safest way.
                        </p>
                    </div>

                    <Image
                        src="/images/ourpurpose1.png"
                        width="300"
                        height="300"
                        alt="TospinoMall Logistics"
                        className="w-full order-1 md:order-3"
                    />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center my-10">

                    <Image
                        src="/images/ourpurpose2.png"
                        width="300"
                        height="300"
                        alt="Tospino Wholesale"
                        className="w-full"
                    />

                    <div >
                        <h3 className="text-3xl font-semibold mb-5">Tospino Wholesale</h3>
                        <p>
                            Welcome to Tospino Wholesale, your premier source for high-quality LED lights in Africa. As a top wholesale distributor, we specialize in supplying energy-efficient LED lighting solutions to businesses and retailers across the continent. Our collection has a large selection of LED items that may be personalized to fit your lighting needs, including fixtures and bulbs. We are the premier option in Africa for wholesale lighting solutions because we are dedicated to delivering high-quality products at affordable rates. Explore our offerings today and enhance your business experience with Tospino Wholesale!
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div className="order-2">
                        <h3 className="text-3xl font-semibold mb-5">Forever and Voor Electronics Co. Ltd</h3>
                        <p>
                            Explore the best in lighting innovation with "Forever and Voor Electronics Co. Ltd.", your premier wholesale supplier of high-quality lights manufactured in China. Specializing in LED, solar, and traditional lighting solutions, we cater to businesses across Africa, offering reliable products at wholesale prices. As a trusted partner, we ensure superior quality and durability, meeting the diverse needs of our clients. Illuminate your spaces efficiently and affordably with Forever and Voor Electronics Co. Ltd. Explore our vast range of lighting options today and easily brighten your business. Join with us for wholesale excellence in Africa.

                        </p>
                    </div>

                    <Image
                        src="/images/ourpurpose1.png"
                        width="300"
                        height="300"
                        alt="Forever and Voor Electronics Co. Ltd"
                        className="w-full order-1 md:order-3"
                    />

                </div>

            </section>

        </main >
    );
};

export default page;