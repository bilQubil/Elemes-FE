import Carousel from "@/components/carousel";
import Image from "next/image";
import { IoMailOutline, IoCallOutline, IoLogoInstagram } from "react-icons/io5";

const slides = [
    {
        id: 1,
        name: "Cupcake",
        imageUrl: "/kue.png",
        items: 10,
    },
];

export default function Home({ fontRubik }: { fontRubik: string }) {
    return (
        <div className=" h-screen w-screen relative">
            {/* Navbar */}
            <div
                className={`${fontRubik} flex flex-row justify-around align-middle h-24 font-medium`}
            >
                <div className="mt-[19px]">
                    <Image
                        src="/logoElemes.svg"
                        width={207}
                        height={50}
                        alt="logo"
                    />
                </div>
                <div className="flex flex-row items-center gap-[16px] text-[14px] text-[#757575]">
                    <button className="hover:bg-gray-100 py-2 px-4 rounded-4xl">
                        <p className="">Home</p>
                    </button>
                    <button className="hover:bg-gray-100 py-2 px-4 rounded-4xl">
                        <p className="">About</p>
                    </button>
                    <div className="relative flex items-center">
                        <button className="hover:bg-gray-100 py-2 px-4 rounded-4xl">
                            <p className="">Promotions</p>
                        </button>
                        <span className="absolute -top-0.5 right-0 bg-[#E7462D] text-white text-[8px] font-semibold px-2 py-[2px] rounded-full">
                            HOT
                        </span>
                    </div>
                    <button className="hover:bg-gray-100 py-2 px-4 rounded-4xl">
                        <p className="">Blog</p>
                    </button>
                    <button className="hover:bg-gray-100 py-2 px-4 rounded-4xl">
                        <p className="">Contact Us</p>
                    </button>
                </div>
                <div className="flex flex-row items-center">
                    <button className="flex justify-center hover:bg-gray-100 py-2 px-4 rounded-4xl mr-5">
                        <p className="">Masuk</p>
                    </button>
                    <button className="bg-[#8BAC3E] hover:bg-[#435c34] rounded-4xl py-[10px] px-[18px]">
                        <p className="text-white font">Daftar Sekarang</p>
                    </button>
                </div>
            </div>
            {/* Hero */}
            <div className="flex flex-row items-center h-[650px] w-full relative overflow-hidden">
                {/* Left */}
                <div className="flex flex-col basis-1/2 ml-[120px] justify-center space-y-6 ">
                    <h1 className="text-[#8BAC3E] text-[64px] font-medium leading-[60px]">
                        Good Food Us <br />
                        Good Mood
                    </h1>
                    <p className="p-2 max-w-md leading-relaxed text-[#757575]">
                        I would think that conserving our natural resources
                        should be a conservative position: Not to waste food,
                        and not to throw away a lot of the food that we buy.
                    </p>
                    <div className="flex flex-row py-4">
                        <button className="bg-[#8BAC3E] hover:bg-[#7aaa5f] rounded-4xl py-[10px] px-[18px] shadow-[0_4px_20px_#666BE259]">
                            <p className="text-white text-[14px] font-medium">
                                Daftar Sekarang
                            </p>
                        </button>
                        <button className="bg-[#F2F2F2] hover:bg-[#e6e6e6] rounded-4xl py-[10px] px-[18px] ml-2">
                            <p className="text-black text-[14px] font-medium">
                                About us
                            </p>
                        </button>
                    </div>
                </div>
                {/* Right */}
                <div className="basis-1/2 flex justify-center mr-25">
                    <div className="relative w-[412px] h-[414px]">
                        <div className="absolute -bottom-11 -right-12 w-[510px] h-[510px] bg-[#C4C4C4] opacity-15 rounded-full z-0"></div>
                        <Image
                            src="/mangkok.png"
                            width={412}
                            height={414}
                            alt="logo"
                            className="object-contain relative z-10"
                        />
                    </div>
                    <div className="absolute right-110 top-114">
                        <Image
                            src="/cardProfile.png"
                            width={297}
                            height={75}
                            alt="logo"
                            className="z-15 object-contain relative"
                        />
                    </div>
                </div>
            </div>
            {/* Sliding card */}
            {/* <div>
                <div>
                    <h1>Browser Our Category</h1>
                    <h1>Receipt</h1>
                </div>
                <div className="flex flex-row">Card slide</div>
            </div> */}
            <Carousel slides={slides} />
            {/* Grid card */}
            <div>
                <div>
                    <h1>Browse Our Trending</h1>
                    <h1>Receipt</h1>
                </div>
                <div>gird</div>
                <button>
                    <p>All Receipt</p>
                </button>
            </div>
            {/* Footer */}
            <div className={`${fontRubik} bg-white py-20`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-12 gap-20">
                        {/* Company Info */}
                        <div className="col-span-4 space-y-6">
                            <Image
                                src="/logoElemes.svg"
                                width={207}
                                height={50}
                                alt="Elemes.id logo"
                                className="mb-2"
                            />
                            <p className="text-sm leading-relaxed text-gray-600">
                                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet
                                Kuningan, Kecamatan Setiabudi, Kota Jakarta
                                Selatan, Daerah Khusus Ibukota Jakarta 12950
                            </p>
                            <div className="flex space-x-3">
                                <button className="group w-10 h-10 bg-white hover:bg-[#8BAC3E] rounded-full flex items-center justify-center transition-all duration-200 border border-gray-100 shadow-sm">
                                    <IoMailOutline className="w-5 h-5 text-black group-hover:text-white transition-all duration-200" />
                                </button>
                                <button className="group w-10 h-10 bg-white hover:bg-[#8BAC3E] rounded-full flex items-center justify-center transition-all duration-200 border border-gray-100 shadow-sm">
                                    <IoCallOutline className="w-5 h-5 text-black group-hover:text-white transition-all duration-200" />
                                </button>
                                <button className="group w-10 h-10 bg-white hover:bg-[#8BAC3E] rounded-full flex items-center justify-center transition-all duration-200 border border-gray-100 shadow-sm">
                                    <IoLogoInstagram className="w-5 h-5 text-black group-hover:text-white transition-all duration-200" />
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="col-span-2 gap-12">
                            <h3 className="text-lg font-medium mb-6">
                                Categories
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Cupcake
                                </li>
                                <li className="hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Pizza
                                </li>
                                <li className="hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Kebab
                                </li>
                                <li className="hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Salmon
                                </li>
                                <li className="hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Dougnut
                                </li>
                            </ul>
                        </div>

                        {/* About Us */}
                        <div className="col-span-2">
                            <h3 className="text-lg font-medium mb-6">
                                About Us
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    About Us
                                </li>
                                <li className="hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    FAQ
                                </li>
                                <li className="hover:text-[#8BAC3E] cursor-pointer transition-colors">
                                    Report Problem
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-span-4">
                            <h3 className="text-lg font-medium mb-6">
                                Newsletter
                            </h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Get now free 50% discount for all products on
                                your first order
                            </p>
                            <div className="mb-6">
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="flex-1 p-3 border border-gray-200 rounded-l-md focus:outline-none focus:border-[#8BAC3E] text-sm"
                                    />
                                    <button className="bg-[#8BAC3E] text-white px-6 py-3 rounded-r-md hover:bg-[#7a9935] transition-colors text-sm font-medium">
                                        SEND
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <IoMailOutline className="w-5 h-5 text-[#8BAC3E]" />
                                    <span className="text-gray-600 text-sm">
                                        elemesid@gmail.com
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <IoCallOutline className="w-5 h-5 text-[#8BAC3E]" />
                                    <span className="text-gray-600 text-sm">
                                        0888 1111 2222
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-100">
                        <p className="text-center text-gray-600 text-sm">
                            © 2021 Elemes id. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
