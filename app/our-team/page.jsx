import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <main className="bg-off-white">
            <section className="flex flex-wrap md:flex-nowrap gap-7 px-0 md:px-[5%]">

                <div className="w-full md:w-1/3 grid grid-rows-2 gap-4 items-stretch ">

                    <div className="flex flex-col justify-center bg-tospino/30 p-5 rounded-xl">
                        <h1 className="text-4xl font-bold mb-3">Build by <br /> a world-class team</h1>
                        <p>Meet the brains from all over the world behind the product you love</p>
                    </div>

                    <Image
                        src="/our-team/ourTeam.png"
                        width={700}
                        height={700}
                        alt="our team image"
                        priority={true}
                    />
                </div>

                <Image
                    src="/our-team/hero.png"
                    width={1500}
                    height={1500}
                    alt="our team hero"
                    className="w-full md:w-2/3"
                    priority={true}
                />
            </section>

            <h2 className="text-4xl font-bold text-center mt-14 mb-12">Meet our Leadership Team</h2>

            {/* head team members section  */}
            <section className="bg-tospino/20 grid grid-cols-1 md:grid-cols-2 gap-12 px-[10%] pt-10 pb-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className="text-center md:text-end">
                        <Image
                            src="/our-team/teamMember1.png"
                            width={600}
                            height={600}
                            alt="team member of tospinomall"
                            className=""
                        />

                        <Link href="" className="btn bg-tospino rounded-full text-white mt-5">
                            <Image
                                src="/icons/linkedin.svg"
                                width={20}
                                height={15}
                                alt="linkedin"
                                className="border p-1 rounded"
                            />
                            Linkedin
                        </Link>
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-center md:text-left text-xl font-semibold">Rajiqul Islam</h3>
                        <p className="text-center md:text-left text-dim-text mt-1.5 mb-3.5">Founder & CEO</p>
                        <p>Adam is a relentless entrepreneur, driven by building the highest quality products in the market. He has a passion for building high-level teams and guiding them to collectively achieve enormous goals. Adam truly believes in people and currently lives in Eastern Europe to build Smarter Contact with his team. In his free time, he enjoys travel, time with family, and the game of chess.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className="text-center md:text-end">
                        <Image
                            src="/our-team/teamMember1.png"
                            width={600}
                            height={600}
                            alt="team member of tospinomall"
                            className=""
                        />

                        <Link href="" className="btn bg-tospino rounded-full text-white mt-5">
                            <Image
                                src="/icons/linkedin.svg"
                                width={20}
                                height={15}
                                alt="linkedin"
                                className="border p-1 rounded"
                            />
                            Linkedin
                        </Link>
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-center md:text-left text-xl font-semibold">Rajiqul Islam</h3>
                        <p className="text-center md:text-left text-dim-text mt-1.5 mb-3.5">Founder & CEO</p>
                        <p>Adam is a relentless entrepreneur, driven by building the highest quality products in the market. He has a passion for building high-level teams and guiding them to collectively achieve enormous goals. Adam truly believes in people and currently lives in Eastern Europe to build Smarter Contact with his team. In his free time, he enjoys travel, time with family, and the game of chess.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className="text-center md:text-end">
                        <Image
                            src="/our-team/teamMember1.png"
                            width={600}
                            height={600}
                            alt="team member of tospinomall"
                            className=""
                        />

                        <Link href="" className="btn bg-tospino rounded-full text-white mt-5">
                            <Image
                                src="/icons/linkedin.svg"
                                width={20}
                                height={15}
                                alt="linkedin"
                                className="border p-1 rounded"
                            />
                            Linkedin
                        </Link>
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-center md:text-left text-xl font-semibold">Rajiqul Islam</h3>
                        <p className="text-center md:text-left text-dim-text mt-1.5 mb-3.5">Founder & CEO</p>
                        <p>Adam is a relentless entrepreneur, driven by building the highest quality products in the market. He has a passion for building high-level teams and guiding them to collectively achieve enormous goals. Adam truly believes in people and currently lives in Eastern Europe to build Smarter Contact with his team. In his free time, he enjoys travel, time with family, and the game of chess.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className="text-center md:text-end">
                        <Image
                            src="/our-team/teamMember1.png"
                            width={600}
                            height={600}
                            alt="team member of tospinomall"
                            className=""
                        />

                        <Link href="" className="btn bg-tospino rounded-full text-white mt-5">
                            <Image
                                src="/icons/linkedin.svg"
                                width={20}
                                height={15}
                                alt="linkedin"
                                className="border p-1 rounded"
                            />
                            Linkedin
                        </Link>
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-center md:text-left text-xl font-semibold">Rajiqul Islam</h3>
                        <p className="text-center md:text-left text-dim-text mt-1.5 mb-3.5">Founder & CEO</p>
                        <p>Adam is a relentless entrepreneur, driven by building the highest quality products in the market. He has a passion for building high-level teams and guiding them to collectively achieve enormous goals. Adam truly believes in people and currently lives in Eastern Europe to build Smarter Contact with his team. In his free time, he enjoys travel, time with family, and the game of chess.</p>
                    </div>
                </div>

            </section>

            {/* other team members  */}
            <section className="py-12 px-[5%]">
                <h3 className="text-4xl font-bold text-center mb-12">Our Team</h3>

                <div className="flex flex-wrap justify-center md:justify-between gap-5">
                    {[...Array(12)].map(val => {
                        return (
                            <div className="flex items-center gap-5">
                                <Image
                                    src="/our-team/teamMember1.png"
                                    width={150}
                                    height={150}
                                    alt="team members of tospino"
                                />

                                <div>
                                    <h3 className="text-xl font-semibold">Jeff <br /> Kolesnikowicz</h3>
                                    <p className="text-dim-text">Full-Stack Engineer</p>

                                    <div className="flex gap-3 mt-3">
                                        <Link href="">
                                            <Image
                                                src="/icons/facebookBlack.svg"
                                                width={16}
                                                height={17}
                                                alt="facebook"
                                                className="bg-tospino/50 rounded p-1"
                                            />
                                        </Link>

                                        <Link href="">
                                            <Image
                                                src="/icons/instagramBlack.svg"
                                                width={20}
                                                height={20}
                                                alt="instagram"
                                                className="bg-tospino/50 rounded p-1"
                                            />
                                        </Link>

                                        <Link href="">
                                            <Image
                                                src="/icons/linkedinBlack.svg"
                                                width={20}
                                                height={20}
                                                alt="linkedin"
                                                className="bg-tospino/50 rounded p-1"
                                            />
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        )
                    })}

                </div>
            </section>
        </main>
    );
};

export default page;