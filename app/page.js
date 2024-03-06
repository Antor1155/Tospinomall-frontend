import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";

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

      
    </main>
  );
}
