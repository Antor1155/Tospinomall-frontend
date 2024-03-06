import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="px-[5%] pt-16 pb-8 bg-black relative border-2 border-tospino text-white">
            {/* <Image
                src="/images/footerbg.png"
                fill
                className="z-0"
            /> */}

            <section className="z-10 relative flex justify-between flex-wrap">

                <div className="w-80 mb-10">
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

                <div className="mb-10">
                    <p className="text-3xl font-semibold mb-5">QUICK LINKS</p>

                    <Link href="" className="text-xl font-normal text-dim-text block mb-5"> Our Teams </Link>
                    <Link href="" className="text-xl font-normal text-dim-text block mb-5"> Blog </Link>
                    <Link href="" className="text-xl font-normal text-dim-text block mb-5"> Fast Fact and Faq </Link>
                    <Link href="" className="text-xl font-normal text-dim-text block mb-5"> About Us </Link>
                    <Link href="" className="text-xl font-normal text-dim-text block mb-5"> Contact Us </Link>
                </div>

                <div>
                    <p className="text-3xl font-semibold mb-5">MORE</p>

                    <Link href="" className="text-xl font-normal text-dim-text block mb-5"> Policy </Link>
                    <Link href="" className="text-xl font-normal text-dim-text block mb-5"> Location </Link>

                    <p className="text-xl font-medium">CHECK OUT OUR PLATFORMS</p>

                    <select id="selectExample" name="selectExample" value="tospinomall" 
                        className="text-black py-1 px-2 rounded-lg">

                        <option value="tospinomall">Tospinomall</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

            </section>

            <div className="flex justify-between items-center flex-wrap w-full mt-10 ">
                <small>© 2024 All Rights Reserved.</small>

                <div>
                    <Link href="" className="text-sm text-dim-text"> Privacy Policy </Link>
                    <Link href="" className="text-sm text-dim-text"> Terms of Use </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;