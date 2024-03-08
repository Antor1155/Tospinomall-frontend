import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <main className="bg-off-white">
            <section className="bg-[url('/images/blogBackground.png')] h-[70vh] bg-cover flex items-center ps-[5%]">
                <h1 className="text-8xl font-bold text-center md:text-left">All Blogs</h1>
            </section>

            {/* all blogs section  */}
            <section>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image
                            src="/blog/blog1.png"
                            width={500}
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
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default page;