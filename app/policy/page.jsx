
const page = () => {
    return (
        <main className="bg-off-white py-12 px-[5%]">
            <div className="flex justify-center">
                <p className="font-sans font-medium text-[#3E7098] bg-tospino/50 py-1.5 px-3 rounded-xl">LEGAL</p>
            </div>

            <h1 className="text-center font-semibold text-6xl my-6">Privacy Policy</h1>

            <p className="text-center text-dim-text mb-12">January 19, 2024</p>

            {/* privacy policy  */}
            <section>
                <p>At TospinoMall, We are committed to securing your privacy and the safety of your personal information. This Privacy Policy sets forth how we gather, utilize, and protect the data you provide using our e-commerce platform.</p>

                <p className="text-3xl font-semibold mt-6 mb-5">Information Collection:</p>
                <p>We collect specific data such as your name, phone number, e-mail address, and delivery address when you create an account, place an order, or communicate with us. Additionally, we may collect non-personal information such as browser type, IP address, and visited pages for analytics.</p>

                <p className="text-2xl font-semibold mt-6 mb-5">Use of Information:</p>
                <p>We use the information we collect to process orders, provide customer support, personalize your shopping experience, and improve our services. Your information may also be used for promotional reasons, such as delivering promotional offers and e-mails; however, you can opt-out anytime.</p>

                <p className="text-2xl font-semibold mt-6 mb-5">Data Security:</p>
                <p>We use industry-standard safety protocols to protect your data from unauthorized access, disclosure, change, or destruction. Your data is securely saved on our systems and may only be accessed by authorized individuals.</p>

                <p className="text-2xl font-semibold mt-6 mb-5">Third-Party Disclosure:</p>
                <p>To help you make your purchases, we may share your information with reputable third parties, such as payment processors and shipping partners. We do not, however, share, trade, or otherwise provide your personal information to third parties without your consent until required by law.</p>

                <p className="text-2xl font-semibold mt-6 mb-5">Cookies:</p>
                <p>We utilize cookies and similar tools to enhance your browsing experience and track the actions of users on our website. You can turn off cookies in your browser's settings, which may limit some features and performance.</p>

                <p className="text-2xl font-semibold mt-6 mb-5">Changes to this Policy:</p>
                <p>We keep the right to change or update our Privacy Policy anytime. Any modifications will be posted here, and your continuing use of our platform will imply acceptance of the changed policy.</p>

                <p className="text-2xl font-semibold mt-6 mb-5">Contact Us:</p>
                <p>If you have any questions or issues about our Privacy Policy or how we handle your personal information, please feel free to reach us at [insert contact information].By using TospinoMall, you agree to the terms of the Privacy Policy. Thank you for entrusting us with your privacy. </p>

            </section>

        </main>
    );
};

export default page;