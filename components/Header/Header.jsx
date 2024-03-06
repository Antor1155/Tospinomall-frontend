"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Header = () => {
    const pathname = usePathname()

    return (
        <header>
            <div className='h-14 px-[5%] bg-semi-black flex justify-between items-center text-sm font-bold text-white'>
                <div>
                    <p className="inline-flex mr-5">
                        <Image
                            src="/icons/phone.svg"
                            width={16}
                            height={16}
                            className="mr-2"
                        />

                        (223) 555-0118
                    </p>
                    <p className="inline-flex">
                        <Image
                            src="/icons/email.svg"
                            width={16}
                            height={16}
                            className="mr-2"
                        />

                        tospinomall@example.com
                    </p>
                </div>

                <p>
                    Follow Us  and get a chance to win 80% off
                </p>

                <div className="inline-flex items-center space-x-2">
                    <p>Follow us : </p>
                    <Image
                        src="/icons/instagram.svg"
                        width={16}
                        height={16}
                    />
                    <Image
                        src="/icons/youtube.svg"
                        width={16}
                        height={16}
                    />
                    <Image
                        src="/icons/facebook.svg"
                        width={16}
                        height={16}
                    />

                    <Image
                        src="/icons/twitter.svg"
                        width={16}
                        height={16}
                    />
                </div>

            </div>

            <nav className="relative py-2.5 pl-[5%] md:bg-semi-black lg:bg-white">
                <Link href="/">
                    <Image
                        src="/icons/tospinomall.svg"
                        width={78}
                        height={76}
                    />
                </Link>

                <div className="">
                    <div className="flex space-x-7 justify-center w-full font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Link href="/" className={`hover:font-medium ${pathname === "/" ? "font-bold text-tospino-text" : "font-normal"}`}>HOME</Link>
                        <Link href="/" className={`hover:font-medium ${pathname === "/our-team" ? "font-bold text-tospino-text" : "font-normal"}`}>OUR TEAM</Link>
                        <Link href="/" className={`hover:font-medium ${pathname === "/blog" ? "font-bold text-tospino-text" : "font-normal"}`}>BLOG</Link>
                        <Link href="/" className={`hover:font-medium ${pathname === "/policy" ? "font-bold text-tospino-text" : "font-normal"}`}>POLICY</Link>
                        <Link href="/" className={`hover:font-medium ${pathname === "/faq" ? "font-bold text-tospino-text" : "font-normal"}`}>FAST FACT ADN FAQ</Link>
                        <Link href="/" className={`hover:font-medium ${pathname === "/about-us" ? "font-bold text-tospino-text" : "font-normal"}`}>ABOUT US</Link>
                        <Link href="/" className={`hover:font-medium ${pathname === "/contact-us" ? "font-bold text-tospino-text" : "font-normal"}`}>CONTACT US</Link>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;