import Image from "next/image";

const page = ({ params }) => {
    return (
        <main className="bg-off-white">
            <Image
                src="/blog/singleBlog.png"
                width={1500}
                height={1500}
                alt="single blog"
                className="w-full"
                priority={true}
            />

            <h1 className="text-3xl font-bold text-center pt-12 pb-8">TospinoMall- The Best Online Shopping Platform In Ghana</h1>

            <p className="font-sans text-center bg-white tracking-widest">By Web-admin / June 4, 2020 / 0 Comment / Uncategorized</p>

            {/* blog content section */}
            <section className="px-[5%] mt-14 flex gap-16">
                <div className="">
                    <div className="mb-8">
                        <p>
                            TospinoMall is a Ghanaian e-commerce platform aiming to provide a localized and convenient shopping experience. TospinoMall has established itself as a trusted platform of quality products for Ghanaians; since 2018, it has been providing the best quality online shopping experience to the people of Ghana.
                        </p>
                        <p>Are you looking for a reliable and affordable online shopping platform in Ghana?</p>
                        <p>Do you want to access various products from different categories and brands?</p>
                        <p>If yes, check out TospinoMall, Ghana's top online shopping hub for digital products, phones, clothing, home appliances, and more.</p>
                    </div>

                    <h2 className="text-2xl font-semibold my-5">Extensive high-quality Product Range</h2>

                    <p>From fashion apparel to electronics, home appliances to groceries, TospinoMall has an extensive collection of high-quality products according to every shopper's preferences and needs. If you're searching for the latest fashion trends, upgrading your gadget experience, or looking for household essentials, TospinoMall is your best choice; you will find everything together here</p>


                    <h2 className="text-2xl font-semibold my-5">User-Friendly Interface</h2>
                    <p>Tospinomall's website and app are easy to use and have user-friendly interfaces. Finding what you need has been easier with clearly labeled categories, search filters, and product descriptions. Whether you're a seasoned online shopper or new to the experience, Tospinomall ensures a superb browsing and purchasing experience.</p>

                    <h2 className="text-2xl font-semibold my-5">Secure Payment Options</h2>
                    <p>Security is very important in online shopping. We care about our customers' safety, and we prioritize the protection of our customers' transactions. Multiple secured payment options are available, and customers can pay securely using mobile money, debit/credit cards, or cash on delivery.</p>

                    <h2 className="text-2xl font-semibold my-5">Fast and Safe Delivery</h2>
                    <p>TospinoMall understands the importance of your time and ensures that your orders reach you promptly. Whether you're located in Accra, Kumasi, or any other region in Ghana, TospinoMall offers nationwide delivery in Ghana, with various delivery options and estimated delivery times.</p>

                    <h2 className="text-2xl font-semibold my-5">Exceptional Customer Service</h2>
                    <p>At Tospinomall, customer satisfaction is our main goal, and our dedicated customer service team is committed to providing the best assistance at every step. Whether you have any queries about a product, need help with an order, or require post-purchase support. Tospinomall's friendly and knowledgeable staff are always here to assist you.</p>

                    <h2 className="text-2xl font-semibold my-5">Affordable Pricing</h2>
                    <p>Tospinomall offers affordable pricing on all its products, ensuring shoppers get the best value. With regular promotions, discounts, and exclusive deals, Tospinomall makes online shopping affordable and accessible without compromising quality.</p>

                    <h2 className="text-2xl font-semibold my-5">Exclusive Deals, Offers and Discounts</h2>
                    <p>We offer exclusive deals, offers, and discounts on our products. You can also enjoy various special offers and benefits, such as coupons, gifts, discounts, birthday gifts, and flash deals.</p>

                    <h2 className="text-2xl font-semibold my-5">Why Choose Tospinomall?</h2>
                    <p>Tospinomall is the best online shop in Ghana, offering the best shopping experience that combines advantage, quality, and affordability. With its huge collections of products, user-friendly and easy interface, secure payment options, fast delivery, dedicated customer service, affordable pricing, and best deals, Tospinomall stands out as the best platform for online shopping in Ghana.</p>

                </div>

                <div className="w-2/3 hidden md:block">

                    <label className="input border-b-black bg-off-white flex items-center justify-between p-0">
                        <input type="text" className="grow" placeholder="Type your keyword" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>

                    <div className="mt-11">
                        <h2 className="text-2xl font-medium mb-3">Popular Post</h2>

                        <div className="flex items-center gap-4 py-3 border-t-2">
                            <Image
                                src="/blog/popular1.png"
                                width={400}
                                height={400}
                                alt="popular blog"
                                className="w-full h-full"
                            />

                            <div>
                                <small className="text-blog-sm">19 June 2024</small>
                                <p>Redefine Luxury with westin hotel.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 py-3 border-t-2">
                            <Image
                                src="/blog/popular2.png"
                                width={400}
                                height={400}
                                alt="popular blog"
                                className="w-full h-full"
                            />

                            <div>
                                <small className="text-blog-sm">25 September 2024</small>
                                <p>Closer To Earth With Heavenly Touch.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 py-3 border-t-2">
                            <Image
                                src="/blog/popular3.png"
                                width={400}
                                height={400}
                                alt="popular blog"
                                className="w-full h-full"
                            />

                            <div>
                                <small className="text-blog-sm">10 March 2014</small>
                                <p>Kimirica Is Now First 100% VEGAN </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default page;