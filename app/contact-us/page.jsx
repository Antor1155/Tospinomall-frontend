"use client"
import useSendMessage from "@/hooks/useSendMessage";
import Image from "next/image";
import Link from "next/link";


const page = () => {
    const handleMsgSubmit = useSendMessage()

    return (
        <main className="bg-off-white">
            <section className="flex items-center justify-between pe-0 md:pe-[5%] bg-gradient-to-r from-[#0000] to-tospino h-[50vh] md:h-[70vh]">
                <Image
                    src="/images/contactHero.png"
                    width={1000}
                    height={1000}
                    alt="contact section hero image"
                    priority={true}

                    className="h-full w-1/2 md:w-auto"
                />

                <h1 className="font-bold text-3xl md:text-5xl lg:text-8xl text-off-white text-center md:text-left mr-5 md:mr-0">Contact Us</h1>
            </section>

            {/* contact section  */}
            <section className="text-center py-11 md:px-11 bg-off-white -mt-9 mx-[5%]">
                <h2 className="font-semibold text-4xl ">Contact & Join Together</h2>
                <p className="my-6"> Reach Out for Support, Inquiries, or Collaboration Opportunities Today</p>

                <form className="bg-balck flex flex-col gap-4" onSubmit={handleMsgSubmit}>
                    <input className="rounded-lg p-4 border border-tospino/50" type="email" name="email" id="email" placeholder="Email" required />
                    <input className="rounded-lg p-4 border border-tospino/50" type="text" name="phone" id="phone" placeholder="Phone" required />

                    <div className="grid grid-cols-2 gap-4">
                        <input className="rounded-lg p-4 border border-tospino/50" type="text" name="firstName" id="firstName" placeholder="First Name" required />
                        <input className="rounded-lg p-4 border border-tospino/50" type="text" name="lastName" id="lastName" placeholder="Last Name" required />
                    </div>

                    <textarea className="rounded-lg p-4 border border-tospino/50" rows="6" name="msg" id="message" placeholder="Enter Your Text Here" required />

                    <button type="submit" className="btn btn-wide text-lg rounded-full text-black bg-white shadow-xl mt-5 mx-auto">SUBMIT MESSAGE</button>

                </form>
            </section>

            {/* ready to grow section  */}
            <section className="grid grid-cols-1 md:grid-cols-2 px-[5%] items-center">

                <div className="h-96 relative mr-0 md:-mr-5 hover:shadow-2xl hover:scale-105">
                    <Image
                        src="/images/map.png"
                        fill
                        alt="map image"
                    />
                </div>

                <div className="bg-[url('/images/readyToGrow.png')] bg-no-repeat bg-cover text-white text-center p-10">
                    <h2 className="text-5xl font-medium">READY TO GROW YOUR BUSINESS?</h2>
                    <p className="font-semibold text-xl my-9">OUR HEAD OFFICE</p>

                    <div className="border-2 rounded-lg md:mx-12 p-5">
                        <p className="text-xl font-medium">ADDRESS</p>
                        <p className="my-5">Plot NO 7-motorway Extention-Industrial area-Spintex Road P.O.BOX 57 Accra, Ghana </p>

                        <p className="text-xl mb-5">CALL +233 20 475 7200</p>

                        <button className="btn bg-white text-black text-xl rounded-md">Open Map</button>
                    </div>
                </div>
            </section>

            {/* follow us on */}
            <section className="py-10 flex flex-wrap item-center gap-11 justify-center">
                <p className="text-2xl font-semibold">
                    follow us on
                </p>

                <div className="flex items-center gap-11">

                    <Link href="" >
                        <Image
                            src="/icons/linkedinBlack.svg"
                            width={23}
                            height={23}
                            alt="linkedin"
                            className="hover:scale-125"
                        />
                    </Link>

                    <Link href="" >
                        <Image
                            src="/icons/twitterBlack.svg"
                            width={23}
                            height={23}
                            alt="twitter"
                            className="hover:scale-125"
                        />
                    </Link>

                    <Link href="" >
                        <Image
                            src="/icons/instagramBlack.svg"
                            width={23}
                            height={23}
                            alt="instagram"
                            className="hover:scale-125"
                        />
                    </Link>

                    <Link href="" >
                        <Image
                            src="/icons/youtubeBlack.svg"
                            width={23}
                            height={23}
                            alt="youtube"
                            className="hover:scale-125"
                        />
                    </Link>

                    <Link href="" >
                        <Image
                            src="/icons/facebookBlack.svg"
                            width={15}
                            height={23}
                            alt="facebook"
                            className="hover:scale-125"
                        />
                    </Link>

                </div>
            </section>

        </main>
    );
};

export default page;