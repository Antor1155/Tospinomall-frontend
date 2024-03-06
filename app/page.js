import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-off-white">
      <Carousel />

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

      <section className="py-11 px-[5%] flex flex-wrap space-y-6 md:space-y-0">
        <Image
          src="/images/homeSecondGroup.png"
          width={380}
          height={300}
          alt="homeSecondGroup"
          className="w-full md:w-1/3"
        />

        <div className="w-full md:w-2/3 md:ps-16 flex flex-col justify-center">
          <h2 className="text-5xl font-semibold">We Are More Effective <br />  To Making Different !!</h2>

          <p className="text-base my-6">
            We are the top e-commerce platform in Ghana, operating in 11 countries.
            Our platform covers an online marketplace with integrated digital payment services and logistics that link millions of buyers and vendors.TospinoMall is a Chinese company, and most Chinese and local sellers are on our app with fast shipping and delivery.
          </p>

          <Link href="/" className="text-lg font-medium btn mr-auto bg-[#33c0ba80] rounded-lg border-2 border-tospino shadow-md shadow-black/50"> More About Our Business </Link>
        </div>
      </section>

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


    </main>
  );
}
