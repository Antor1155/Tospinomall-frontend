import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <main className="bg-off-white">
            <section className="bg-[url('/images/blogBackground.png')] h-[70vh] bg-cover flex items-center ps-[5%]">
                <h1 className="text-8xl font-bold text-center md:text-left">All Blogs</h1>
            </section>

            {/* all blogs section  */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 px-[5%]">

                <div className="card card-compact">
                    <figure>
                        <Image
                            src="/blog/blog1.png"
                            width={600}
                            height={500}
                            alt="blog image"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">Start Your Career With Ghana's Top E-commerce Platform: TospinoMall</h2>

                        <p className="text-blog-sm">
                            BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                        </p>

                        <p className="text-base">In this digital world, having a job with a leading e-commerce platform can lead to tremendous growth and success. TospinoMall is..</p>

                        <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>

                    </div>
                </div>

                <div className="card card-compact">
                    <figure>
                        <Image
                            src="/blog/blog2.png"
                            width={600}
                            height={500}
                            alt="blog image"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">5 Tips to Enhance Your Customer Experience with TospinoMall's Fastest Delivery System</h2>

                        <p className="text-blog-sm">
                            BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                        </p>

                        <p className="text-base">Welcome to TospinoMall, where customer satisfaction is our top priority! In this fast-paced world, where time is of...</p>

                        <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>

                    </div>
                </div>

                <div className="card card-compact">
                    <figure>
                        <Image
                            src="/blog/blog3.png"
                            width={600}
                            height={500}
                            alt="blog image"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">How to Start an E-commerce Business in Ghana with TospinoMall</h2>

                        <p className="text-blog-sm">
                            BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                        </p>

                        <p className="text-base">E-commerce has revolutionized how business is conducted globally, and Ghana is no exception to this trend. With growing i...</p>

                        <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>

                    </div>
                </div>

                <div className="card card-compact">
                    <figure>
                        <Image
                            src="/blog/blog4.png"
                            width={600}
                            height={500}
                            alt="blog image"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">Start Your Career With Ghana's Top E-commerce Platform: TospinoMall</h2>

                        <p className="text-blog-sm">
                            BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                        </p>

                        <p className="text-base">In this digital world, having a job with a leading e-commerce platform can lead to tremendous growth and success. TospinoMall is..</p>

                        <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>

                    </div>
                </div>

                <div className="card card-compact">
                    <figure>
                        <Image
                            src="/blog/blog5.png"
                            width={600}
                            height={500}
                            alt="blog image"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">A Unique Insight into TospinoMall-Your One-Stop Shopping Destination</h2>

                        <p className="text-blog-sm">
                            BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                        </p>

                        <p className="text-base">TospinoMall, a prominent player in the e-commerce industry, offers a comprehensive shopping experience through its diverse s...</p>

                        <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>

                    </div>
                </div>

                <div className="card card-compact">
                    <figure>
                        <Image
                            src="/blog/blog6.png"
                            width={600}
                            height={500}
                            alt="blog image"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">Behind the Scenes Look at How We Bring You the Best Deals in Ghana</h2>

                        <p className="text-blog-sm">
                            BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                        </p>

                        <p className="text-base">At TospinoMall, pursuing unbeatable deals isn't just a goal; it's a craft we've mastered. As Ghana's online shopping scene develops, we sta...</p>

                        <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>
                    </div>
                </div>

            </section>

            {/* pagination  */}
            <section className="flex justify-center md:justify-end gap-4 mt-16 px-[5%]">

                <button className="bg-white rounded-xl btn btn-md"> {"<"} </button>
                <button className="bg-white rounded-xl btn btn-md text-tospino">1</button>
                <button className="bg-white rounded-xl btn btn-md ">2</button>
                <button className="bg-white rounded-xl btn btn-md">3</button>
                <button className="bg-white rounded-xl btn btn-md">4</button>
                <button className="bg-white rounded-xl btn btn-md"> {">"} </button>

            </section>


            {/* recent blogs  */}
            <section className="px-[5%] mt-12 pb-12">
                <h2 className="text-5xl font-bold">Recent Blog</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 ">

                    <div className="card card-compact">
                        <figure>
                            <Image
                                src="/blog/blog7.png"
                                width={600}
                                height={500}
                                alt="blog image"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">Amazing Things You May Have Missed Growing up</h2>

                            <p className="text-blog-sm">
                                BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                            </p>

                            <p className="text-base">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</p>

                            <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>

                        </div>
                    </div>

                    <div className="card card-compact">
                        <figure>
                            <Image
                                src="/blog/blog7.png"
                                width={600}
                                height={500}
                                alt="blog image"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">Amazing Things You May Have Missed Growing up</h2>

                            <p className="text-blog-sm">
                                BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                            </p>

                            <p className="text-base">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</p>

                            <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>

                        </div>
                    </div>

                    <div className="card card-compact">
                        <figure>
                            <Image
                                src="/blog/blog7.png"
                                width={600}
                                height={500}
                                alt="blog image"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">Amazing Things You May Have Missed Growing up</h2>

                            <p className="text-blog-sm">
                                BY <span className="text-red-500 mr-5">SHANE DOE</span> MAY 14, 2016
                            </p>

                            <p className="text-base">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</p>

                            <Link href="" className="text-xl font-medium btn bg-tospino/50 rounded-full mr-auto mt-5">Continue Reading...</Link>

                        </div>
                    </div>

                </div>

            </section>

        </main>
    );
};

export default page;