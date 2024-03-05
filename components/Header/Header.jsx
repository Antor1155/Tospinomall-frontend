import Image from "next/image";

const Header = () => {
    return (
        <header>
            <div className='h-14 bg-black flex justify-evenly items-center text-sm font-bold text-white'>
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

                <p className="inline-flex items-center gap-2">
                    Follow us :
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
                </p>

            </div>

        </header>
    );
};

export default Header;