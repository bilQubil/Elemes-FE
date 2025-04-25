import Image from "next/image";
import { IoMailOutline, IoCallOutline, IoLogoInstagram } from "react-icons/io5";

interface FooterProps {
    fontRubik: string;
}

export default function Footer({ fontRubik }: FooterProps) {
    return (
        <>
            <div className={`footer ${fontRubik} bg-white py-10 md:py-20`}>
                <div className="footer__container max-w-7xl mx-auto p-6 md:p-16 bg-[#F9FFF6]">
                    <div className="footer__grid grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
                        {/* Company Info */}
                        <div className="footer__company col-span-1 md:col-span-4 space-y-6">
                            <Image
                                src="/logoElemes.svg"
                                width={207}
                                height={50}
                                alt="Elemes.id logo"
                                className="footer__logo"
                            />
                            <p className="footer__address text-sm leading-relaxed text-gray-600">
                                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet
                                Kuningan, Kecamatan Setiabudi, Kota Jakarta
                                Selatan, Daerah Khusus Ibukota Jakarta 12950
                            </p>
                            <div className="footer__social flex space-x-3">
                                <button className="footer__social-item group w-10 h-10 bg-white hover:bg-[#8BAC3E] rounded-full flex items-center justify-center transition-all duration-200 border border-gray-100 shadow-sm">
                                    <IoMailOutline className="w-5 h-5 text-black group-hover:text-white transition-all duration-200" />
                                </button>
                                <button className="footer__social-item group w-10 h-10 bg-white hover:bg-[#8BAC3E] rounded-full flex items-center justify-center transition-all duration-200 border border-gray-100 shadow-sm">
                                    <IoCallOutline className="w-5 h-5 text-black group-hover:text-white transition-all duration-200" />
                                </button>
                                <button className="footer__social-item group w-10 h-10 bg-white hover:bg-[#8BAC3E] rounded-full flex items-center justify-center transition-all duration-200 border border-gray-100 shadow-sm">
                                    <IoLogoInstagram className="w-5 h-5 text-black group-hover:text-white transition-all duration-200" />
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="footer__categories col-span-1 md:col-span-2 gap-12">
                            <h3 className="footer__title text-lg font-medium mb-6">
                                Categories
                            </h3>
                            <ul className="footer__list space-y-4 text-gray-600">
                                <li className="footer__list-item hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Cupcake
                                </li>
                                <li className="footer__list-item hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Pizza
                                </li>
                                <li className="footer__list-item hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Kebab
                                </li>
                                <li className="footer__list-item hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Salmon
                                </li>
                                <li className="footer__list-item hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Dougnut
                                </li>
                            </ul>
                        </div>

                        {/* About Us */}
                        <div className="footer__about col-span-1 md:col-span-2">
                            <h3 className="footer__title text-lg font-medium mb-6">
                                About Us
                            </h3>
                            <ul className="footer__list space-y-4 text-gray-600">
                                <li className="footer__list-item hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    About Us
                                </li>
                                <li className="footer__list-item hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    FAQ
                                </li>
                                <li className="footer__list-item hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Report Problem
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="footer__newsletter col-span-1 md:col-span-4">
                            <h3 className="footer__title text-lg font-medium mb-6">
                                Newsletter
                            </h3>
                            <p className="footer__description text-sm text-gray-600 mb-6 leading-relaxed">
                                Get now free 50% discount for all products on
                                your first order
                            </p>
                            <div className="footer__form mb-6">
                                <div className="footer__form-group flex">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="footer__input flex-1 p-3 border border-gray-200 rounded-l-md focus:outline-none focus:border-[#8BAC3E] text-sm"
                                    />
                                    <button className="footer__submit bg-[#8BAC3E] text-white px-6 py-3 rounded-r-md hover:opacity-90 transition-all duration-200 text-sm font-medium">
                                        SEND
                                    </button>
                                </div>
                            </div>
                            <div className="footer__contact space-y-3">
                                <div className="footer__contact-item flex items-center space-x-3">
                                    <IoMailOutline className="w-5 h-5 text-[#8BAC3E]" />
                                    <span className="text-gray-600 text-sm">
                                        elemesid@gmail.com
                                    </span>
                                </div>
                                <div className="footer__contact-item flex items-center space-x-3">
                                    <IoCallOutline className="w-5 h-5 text-[#8BAC3E]" />
                                    <span className="text-gray-600 text-sm">
                                        0888 1111 2222
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright py-8 border-t border-gray-100">
                <p className="text-center text-gray-600 text-sm">
                    © 2021 Elemes id. All rights reserved
                </p>
            </div>
        </>
    );
}
