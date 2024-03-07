"use client"
import BusinessImgCarousel from "@/components/BusinessImgCarousel/BusinessImgCarousel";
import Image from "next/image";
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
            <section className="px-[5%] mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-y-10  gap-x-10">
                
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

        </main >
    );
};

export default page;