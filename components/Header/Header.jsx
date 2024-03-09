"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const Header = () => {
    const pathname = usePathname()

    const [showNav, setShowNav] = useState(false)

    return (
        <header className="">
            <div className='hidden lg:flex h-14 px-[5%] bg-semi-black justify-between items-center text-sm font-bold text-white'>
                <div>
                    <p className="inline-flex mr-5">
                        <Image
                            src="/icons/phone.svg"
                            width={16}
                            height={16}
                            className="mr-2"
                            alt="phone"
                        />
                        <Link href="">(223) 555-0118</Link>

                    </p>
                    <p className="inline-flex">
                        <Image
                            src="/icons/email.svg"
                            width={16}
                            height={16}
                            className="mr-2"
                            alt="email"
                        />
                        <Link href="">tospinomall@example.com</Link>
                    </p>
                </div>

                <p>
                    Follow Us  and get a chance to win 80% off
                </p>

                <div className="inline-flex items-center space-x-2">
                    <p>Follow us : </p>
                    
                    <Link href="">
                        <Image
                            src="/icons/instagram.svg"
                            width={16}
                            height={16}
                            alt="instagram"
                        />
                    </Link>

                    <Link href="">
                        <Image
                            src="/icons/youtube.svg"
                            width={16}
                            height={16}
                            alt="youtube"
                        />
                    </Link>

                    <Link href="">
                        <Image
                            src="/icons/facebook.svg"
                            width={16}
                            height={16}
                            alt="facebook"
                        />
                    </Link>

                    <Link href="">
                        <Image
                            src="/icons/twitter.svg"
                            width={16}
                            height={16}
                            alt="twitter"
                        />
                    </Link>

                </div>

            </div>

            <nav className="relative py-2.5 px-[5%] bg-semi-black lg:bg-white flex justify-between items-center">

                <Link href="/" className="lg:w-20 lg:h-20 w-10 h-10 block relative z-10">
                    <Image
                        src="/icons/tospinomall.svg"
                        fill
                        alt="tospinomall"
                    />
                </Link>


                <div className="hidden lg:flex space-x-7 justify-center w-full font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Link href="/" className={`hover:font-medium ${pathname === "/" ? "font-bold text-tospino-text" : "font-normal"}`}>HOME</Link>
                    <Link href="/our-team" className={`hover:font-medium ${pathname === "/our-team" ? "font-bold text-tospino-text" : "font-normal"}`}>OUR TEAM</Link>
                    <Link href="/blog" className={`hover:font-medium ${pathname === "/blog" ? "font-bold text-tospino-text" : "font-normal"}`}>BLOG</Link>
                    <Link href="/policy" className={`hover:font-medium ${pathname === "/policy" ? "font-bold text-tospino-text" : "font-normal"}`}>POLICY</Link>
                    <Link href="/fast-fact" className={`hover:font-medium ${pathname === "/faq" ? "font-bold text-tospino-text" : "font-normal"}`}>FAST FACT ADN FAQ</Link>
                    <Link href="/about-us" className={`hover:font-medium ${pathname === "/about-us" ? "font-bold text-tospino-text" : "font-normal"}`}>ABOUT US</Link>
                    <Link href="/contact-us" className={`hover:font-medium ${pathname === "/contact-us" ? "font-bold text-tospino-text" : "font-normal"}`}>CONTACT US</Link>
                </div>

                {showNav &&
                    <div className="lg:hidden w-full h-lvh border-2 border-black bg-white font-medium absolute top-16 left-0 z-10"
                        onClick={() => setShowNav(false)}
                    >
                        <Link href="/" className={`hover:font-medium block border-2 py-2 text-center ${pathname === "/" ? "font-bold text-tospino-text" : "font-normal"}`}>HOME</Link>
                        <Link href="/our-team" className={`hover:font-medium block border-2 py-2 text-center ${pathname === "/our-team" ? "font-bold text-tospino-text" : "font-normal"}`}>OUR TEAM</Link>
                        <Link href="/blog" className={`hover:font-medium block border-2 py-2 text-center ${pathname === "/blog" ? "font-bold text-tospino-text" : "font-normal"}`}>BLOG</Link>
                        <Link href="/policy" className={`hover:font-medium block border-2 py-2 text-center ${pathname === "/policy" ? "font-bold text-tospino-text" : "font-normal"}`}>POLICY</Link>
                        <Link href="/fast-fact" className={`hover:font-medium block border-2 py-2 text-center ${pathname === "/faq" ? "font-bold text-tospino-text" : "font-normal"}`}>FAST FACT ADN FAQ</Link>
                        <Link href="/about-us" className={`hover:font-medium block border-2 py-2 text-center ${pathname === "/about-us" ? "font-bold text-tospino-text" : "font-normal"}`}>ABOUT US</Link>
                        <Link href="/contact-us" className={`hover:font-medium block border-2 py-2 text-center ${pathname === "/contact-us" ? "font-bold text-tospino-text" : "font-normal"}`}>CONTACT US</Link>
                    </div>
                }


                <button
                    className=" block lg:hidden"
                    onClick={() => { setShowNav(!showNav) }}
                >
                    {showNav ?
                        <Image
                            src="/icons/cancel.svg"
                            width={28}
                            height={20}
                            alt="cancel button"
                        />
                        :
                        <Image
                            src="/icons/menu.svg"
                            width={24}
                            height={24}
                            alt="menu button"
                        />
                    }
                </button>
            </nav>

        </header>
    );
};

export default Header;