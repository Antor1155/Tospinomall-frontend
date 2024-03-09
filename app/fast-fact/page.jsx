import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <main className="bg-off-white">
            {/* hero section  */}
            <section className="bg-tospino text-white py-24 px-[5%]">
                <h1 className="text-5xl font-bold mb-5">Fast Fact and Faq</h1>
                <p className="text-2xl">Welcome to TospinoMall, your premier online shopping destination in Ghana! Learn more about our innovative e-commerce platform and find answers to commonly asked questions below.</p>
            </section>

            {/* fast fact about tospino  */}
            <section className="py-12 px-[5%]">
                <h2 className="mb-8 font-semibold text-4xl text-center">Fast Facts about TospinoMall</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* single fact  */}
                    <div className="bg-white pt-20 pb-8 px-5 rounded-xl shadow-2xl">

                        <div className="border-4 border-tospino rounded-xl text-center h-full">
                            <Image
                                src="/icons/fastFact.svg"
                                width={122}
                                height={122}
                                alt="fast fact"
                                className="px-10 box-content -translate-y-1/2 mx-auto bg-white w-2/5"
                            />
                            <div className="text-center -mt-5 pb-5 px-5">
                                <h3 className="font-medium text-xl mb-5">Ghanaian-Owned</h3>
                                <p className="text-dim-text text-sm">
                                    Your clients can download the user-friendly mobile app on iOS or Android. In your custom branded portal clients can scan documents, send secure messages, settle invoices, sign documents, view proposals, and more.
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* single fact  */}
                    <div className="bg-white pt-20 pb-8 px-5 rounded-xl shadow-2xl">

                        <div className="border-4 border-tospino rounded-xl text-center h-full">
                            <Image
                                src="/icons/fastFact.svg"
                                width={122}
                                height={122}
                                alt="fast fact"
                                className="px-10 box-content -translate-y-1/2 mx-auto bg-white w-2/5"
                            />
                            <div className="text-center -mt-5 pb-5 px-5">
                                <h3 className="font-medium text-xl mb-5">Integrated Logistics</h3>
                                <p className="text-dim-text text-sm">
                                    Our logistics infrastructure ensures efficient and reliable delivery of orders, offering convenience and peace of mind to shoppers and sellers alike.
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* single fact  */}
                    <div className="bg-white pt-20 pb-8 px-5 rounded-xl shadow-2xl">

                        <div className="border-4 border-tospino rounded-xl text-center h-full">
                            <Image
                                src="/icons/fastFact.svg"
                                width={122}
                                height={122}
                                alt="fast fact"
                                className="px-10 box-content -translate-y-1/2 mx-auto bg-white w-2/5"
                            />
                            <div className="text-center -mt-5 pb-5 px-5">
                                <h3 className="font-medium text-xl mb-5">Wholesale and Retail</h3>
                                <p className="text-dim-text text-sm">
                                    TospinoMall caters to retail and wholesale customers, offering competitive pricing and flexible purchasing options.
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* single fact  */}
                    <div className="bg-white pt-20 pb-8 px-5 rounded-xl shadow-2xl">

                        <div className="border-4 border-tospino rounded-xl text-center h-full">
                            <Image
                                src="/icons/fastFact.svg"
                                width={122}
                                height={122}
                                alt="fast fact"
                                className="px-10 box-content -translate-y-1/2 mx-auto bg-white w-2/5"
                            />
                            <div className="text-center -mt-5 pb-5 px-5">
                                <h3 className="font-medium text-xl mb-5">Multi Vendor Platform</h3>
                                <p className="text-dim-text text-sm">
                                    Our platform hosts diverse products from local sellers and entrepreneurs, ranging from fashion and electronics to home goods and more.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* your firms and clients in one place  */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[5%] bg-tospino-text/30">

                <div className="flex flex-col justify-center gap-6">
                    <h3 className="text-3xl font-semibold">Your Firms & clients in one place</h3>
                    <p className="text-black/50">
                        We are the top e-commerce platform in Ghana, operating in 11 countries. Our platform covers of an online marketplace with integrated digital payment services and logistics that links millions of buyers and vendors.
                    </p>

                    <Link href="" className="btn rounded-xl border border-tospino text-tospino-text font-semibold mr-auto px-5">More Info</Link>
                </div>

                <Image
                    src="/images/fastFact.png"
                    width={1200}
                    height={1200}
                    alt="all firms and clients"
                />
            </section>

            <section className="mt-12">
                <FaqAccordion />
            </section>

        </main>
    );
};

export default page;