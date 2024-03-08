import Image from "next/image";


const page = () => {
    return (
        <main className="bg-off-white">
            <section className="flex items-center justify-between pe-0 md:pe-[5%] bg-gradient-to-r from-[#0000] to-tospino h-[50vh] md:h-[70vh]">
                <Image 
                    src="/images/contactHero.png"
                    width={1000}
                    height={1000}
                    alt="contact section hero image"
                    priority={true}

                    className="h-full w-1/2 md:w-auto"
                />

                <h1 className="font-bold text-3xl md:text-5xl lg:text-8xl text-off-white mr-5 md:mr-0">Contact Us</h1>
            </section>
            
        </main>
    );
};

export default page;