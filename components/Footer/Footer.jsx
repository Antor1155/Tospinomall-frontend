import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="px-[5%] pt-16 pb-16 bg-black relative border-2 border-tospino text-white">
            {/* <Image
                src="/images/footerbg.png"
                fill
                className="z-0"
            /> */}

            <section className="z-10 relative">

                <div className="w-80">
                    <h2 className="font-bold text-3xl mb-5">
                        <Image
                            src="/icons/tospinomall.svg"
                            width={42}
                            height={41}
                            alt="tospinomall"
                            className="mr-4 inline"
                        />

                        Tospinomall
                    </h2>

                    <p className="font-normal text-xl mb-9">Better Lifestyle with High-End Online Shopping</p>

                    <form className="border border-tospino-text rounded-lg p-1">
                        <input type="email" className="bg-transparent w-2/3" />
                        <button type="sumbit" className="p-2.5 bg-tospino-text w-1/3 rounded-e-lg hover:font-bold">
                            Subscribe
                        </button>
                    </form>

                    <div className="mt-5 flex space-x-4 justify-between items-center w-full">
                        <Link href="">
                            <Image
                                src="/icons/facebook.svg"
                                width={18}
                                height={18}
                                alt="facebook"
                                className="bg-semi-black p-2 box-content"
                            />
                        </Link>

                        <Link href="">
                            <Image
                                src="/icons/twitter.svg"
                                width={18}
                                height={18}
                                alt="twitter"
                                className="bg-semi-black p-2 box-content"
                            />
                        </Link>

                        <Link href="">
                            <Image
                                src="/icons/linkedin.svg"
                                width={18}
                                height={18}
                                alt="linkedin"
                                className="bg-semi-black p-2 box-content"
                            />
                        </Link>

                        <Link href="">
                            <Image
                                src="/icons/youtube.svg"
                                width={18}
                                height={18}
                                alt="youtube"
                                className="bg-semi-black p-2 box-content"
                            />
                        </Link>

                        <Link href="">
                            <Image
                                src="/icons/instagram.svg"
                                width={18}
                                height={18}
                                alt="instagram"
                                className="bg-semi-black p-2 box-content"
                            />
                        </Link>

                        <Link href="">
                            <Image
                                src="/icons/printes.svg"
                                width={18}
                                height={18}
                                alt="pinterest"
                                className="bg-semi-black p-2 box-content"
                            />
                        </Link>


                    </div>
                </div>

            </section>
        </footer>
    );
};

export default Footer;