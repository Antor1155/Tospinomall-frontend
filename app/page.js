"use client"

import Carousel from "@/components/Carousel/Carousel";
import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";
import ResponsiveCarousel from "@/components/ResponsiveCarousel/ResponsiveCarousel";
import useSendMessage from "@/hooks/useSendMessage";
import useSubscribe from "@/hooks/useSubscribe";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleSubmit = useSubscribe()
  const handleMsgSubmit = useSendMessage()

  return (
    <main className="bg-off-white">
      <Carousel />
      
      {/* partner companies  */}
      <sectin className="bg-white flex justify-between items-center w-full py-14 px-[5%]">
        <Image
          src="/images/partner1.svg"
          width={103}
          height={30}
          alt="partner1"
          className="w-[8%]"
        />
        <Image
          src="/images/partner2.svg"
          width={80}
          height={30}
          alt="partner2"
          className="w-[6%]"
        />
        <Image
          src="/images/partner3.svg"
          width={60}
          height={30}
          alt="partner3"
          className="self-start w-[7%]"
        />
        <Image
          src="/images/partner4.svg"
          width={90}
          height={30}
          alt="partner4"
          className="w-[8%]"
        />
        <Image
          src="/images/partner5.svg"
          width={80}
          height={30}
          alt="partner5"
          className="w-[8%]"
        />
        <Image
          src="/images/partner6.svg"
          width={50}
          height={30}
          alt="partner6"
          className="self-start w-[6%]"
        />
      </sectin>

      {/* join our agency  */}
      <section className="py-11 px-[5%] flex flex-wrap space-y-6 md:space-y-0">
        <Image
          src="/images/homeSecondGroup.png"
          width={1000}
          height={1000}
          alt="homeSecondGroup"
          className="w-full md:w-1/3"
        />

        <div className="w-full md:w-2/3 md:ps-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl text-center md:text-left font-semibold">We Are More Effective <br />  To Making Different !!</h2>

          <p className="text-base my-6">
            We are the top e-commerce platform in Ghana, operating in 11 countries.
            Our platform covers an online marketplace with integrated digital payment services and logistics that link millions of buyers and vendors.TospinoMall is a Chinese company, and most Chinese and local sellers are on our app with fast shipping and delivery.
          </p>

          <Link href="/" className="text-lg font-medium btn mr-auto bg-tospino-btn rounded-lg border-2 border-tospino shadow-md shadow-black/50"> More About Our Business </Link>
        </div>
      </section>

      {/* our promise to ourselves */}
      <section className="bg-tospino flex text-white items-center px-[5%]">
        <div className="w-1/2">
          <h2 className="text-3xl md:text-5xl font-semibold">Our promise to ourselves</h2>
          <p className="text-sm my-6"> Sustaining a Better Tomorrow, Positively Driving Change, and Making Communities.</p>
        </div>

        <div className="relative w-1/2 h-96">
          <Image
            src="/images/homeThird.png"
            fill
            alt="our promises model"
            className="object-cover md:object-contain"
          />
        </div>
      </section>

      <ResponsiveCarousel />

      {/* our team  */}
      <section className="my-12 text-center px-[5%]">
        <h2 className="text-5xl font-semibold">Our Team</h2>

        <div className="grid grid-cols-3 gap-2 md:gap-8 items-end my-10">

          <div>
            <Image
              src="/images/team1.png"
              width={1000}
              height={1000}
              alt="team member"
              className="w-full rounded-md"
            />

            <div className="bg-[#E7EDF8] py-5 mt-2 rounded-md">
              <p>Jullia Siger</p>
              <p className="font-medium">MD</p>
            </div>
          </div>

          <div>
            <Image
              src="/images/team2.png"
              width={1000}
              height={1000}
              alt="team member"
              className="w-full rounded-md"
            />

            <div className="bg-[#E7EDF8] py-5 mt-2 rounded-md">
              <p>Makhaia Antitni</p>
              <p className="font-medium">CEO</p>
            </div>
          </div>

          <div>
            <Image
              src="/images/team3.png"
              width={1000}
              height={1000}
              alt="team member"
              className="w-full rounded-md"
            />

            <div className="bg-[#E7EDF8] py-5 mt-2 rounded-md">
              <p>Harry Steve</p>
              <p className="font-medium">CTO</p>
            </div>
          </div>


          {/* hide those  divs in smaller display  */}
          <div className="hidden md:block">
            <Image
              src="/images/team1.png"
              width={1000}
              height={1000}
              alt="team member"
              className="w-full rounded-md"
            />

            <div className="bg-[#E7EDF8] py-5 mt-2 rounded-md">
              <p>Jullia Siger</p>
              <p className="font-medium">MD</p>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src="/images/team1.png"
              width={1000}
              height={1000}
              alt="team member"
              className="w-full rounded-md"
            />

            <div className="bg-[#E7EDF8] py-5 mt-2 rounded-md">
              <p>Jullia Siger</p>
              <p className="font-medium">MD</p>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src="/images/team1.png"
              width={1000}
              height={1000}
              alt="team member"
              className="w-full rounded-md"
            />

            <div className="bg-[#E7EDF8] py-5 mt-2 rounded-md">
              <p>Jullia Siger</p>
              <p className="font-medium">MD</p>
            </div>
          </div>

        </div>

        <Link href="/" className="text-lg font-medium btn mx-auto bg-tospino-btn rounded-lg border-2 border-tospino shadow-md shadow-black/50"> Show More </Link>

      </section>

      <FaqAccordion />

      {/* subscribe sectin  */}
      <section className="px-[5%] pt-28 pb-24  md:pt-36 md:pb-32 -mt-9 bg-tospino text-white grid grid-cols-1 md:grid-cols-2 gap-3 items-center">

        <p className="text-3xl text-center md:text-left font-semibold mb-4 md:mb-0">Sign up for leatest resources news from TospinoMall</p>

        <form className="" onSubmit={handleSubmit}>
          <input type="email" name="email" required placeholder="Email" className="w-2/3 border-4 border-white h-12 rounded-s text-black" />
          <button type="submit" className="btn border-4 border-white bg-tospino text-white -translate-y-0.5"> Subscribe </button>
        </form>
      </section>

      {/* latest blogs  */}
      <section className="my-12 px-[5%]">
        <h2 className="text-5xl font-semibold text-center">Latest Blog</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch my-10">

          <div className="card card-compact">
            <figure>
              <Image
                src="/images/blog1.png"
                width={500}
                height={500}
                alt="blog1"
                className="w-full"
              />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-center">
                <small>Aplir 10, 2024</small>
                <small>Ecommerce</small>
              </div>

              <h2 className="card-title">TospinoMall- The Best Online Shopping Platform In Ghana</h2>
              <p>TospinoMall is a Ghanaian e-commerce platform aiming to...</p>

              <div className="bg-black/30 h-1 my-4"></div>

              <div className="flex justify-between items-center gap-4">
                <Image
                  src="/images/blogWritter.png"
                  width={35}
                  height={35}

                />

                <p>Arafat</p>

              </div>

            </div>

          </div>

          <div className="card card-compact">
            <figure>
              <Image
                src="/images/blog2.png"
                width={500}
                height={500}
                alt="blog2"
                className="w-full"
              />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-center">
                <small>April 11, 2024</small>
                <small>Business</small>
              </div>

              <h2 className="card-title">5 Tips to Enhance Your Customer Experience with...</h2>
              <p>Welcome to TospinoMall, where customer satisfaction is our top...</p>

              <div className="bg-black/30 h-1 my-4"></div>

              <div className="flex justify-between items-center gap-4">
                <Image
                  src="/images/blogWritter.png"
                  width={35}
                  height={35}

                />

                <p>Arafat</p>

              </div>

            </div>

          </div>

          <div className="card card-compact hidden md:flex">
            <figure>
              <Image
                src="/images/blog3.png"
                width={500}
                height={500}
                alt="blog3"
                className="w-full"
              />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-center">
                <small>April 11, 2024</small>
                <small>Business</small>
              </div>

              <h2 className="card-title">How to Start an E-commerce Business in Ghana with...</h2>
              <p>E-commerce has revolutionized how business is conducted ... </p>

              <div className="bg-black/30 h-1 my-4"></div>

              <div className="flex justify-between items-center gap-4">
                <Image
                  src="/images/blogWritter.png"
                  width={35}
                  height={35}

                />

                <p>Arafat</p>

              </div>

            </div>

          </div>

          <div className="card card-compact hidden lg:flex">
            <figure>
              <Image
                src="/images/blog4.png"
                width={500}
                height={500}
                alt="blog4"
                className="w-full"
              />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-center">
                <small>April 11, 2024</small>
                <small>Business</small>
              </div>

              <h2 className="card-title">Start Your Career With Ghana's Top E-commerce...</h2>
              <p>In this digital world, having a job with a leading e-commerce...</p>

              <div className="bg-black/30 h-1 my-4"></div>

              <div className="flex justify-between items-center gap-4">
                <Image
                  src="/images/blogWritter.png"
                  width={35}
                  height={35}
                  alt="blog writter"
                />
                <p>Arafat</p>
              </div>

            </div>

          </div>


        </div>

        <div className="text-center">
          <Link href="/" className="text-lg font-medium btn bg-tospino-btn rounded-lg border-2 border-tospino shadow-md shadow-black/50"> Show More </Link>
        </div>

      </section>

      {/* contact form  */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center items-stretch md:px-[5%] mt-20 pb-12">

        <div className="bg-tospino p-5 md:p-10 text-center rounded-2xl order-2 md:order-1">
          <h2 className="text-4xl text-white font-semibold mb-5">Contact & Join Together</h2>
          <p className="text-white mb-5"> Reach Out for Support, Inquiries, or Collaboration Opportunities Today</p>

          <form className="bg-balck flex flex-col gap-4" onSubmit={handleMsgSubmit}>
            <input className="rounded-lg p-5" name="email" type="email" id="email" placeholder="Email" required />
            <input className="rounded-lg p-5" name="phone" type="text" id="phone" placeholder="Phone" required />

            <div className="grid grid-cols-2 gap-4">
              <input className="rounded-lg p-5" name="firstName" type="text" id="firstName" placeholder="First Name" required />
              <input className="rounded-lg p-5" name="lastName" type="text" id="lastName" placeholder="Last Name" required />
            </div>

            <textarea className="rounded-lg p-5" name="msg" rows="6" id="message" placeholder="Enter Your Text Here" required />

            <button type="submit" className="btn btn-wide text-lg rounded-full bg-semi-black text-white border-black mt-5 mx-auto">SUBMIT MESSAGE</button>

          </form>
        </div>

        <div className="order-1 md:order-2 relative min-h-96">
          <Image
            src="/images/customerSupport.png"
            fill
            alt="customer support"
            className="object-contain md:object-cover rounded-2xl "
          />

        </div>
      </section>

    </main>
  );
}
