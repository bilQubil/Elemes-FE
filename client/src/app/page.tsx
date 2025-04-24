import Image from "next/image";

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
                    <div className="absolute right-122 top-115">
                        <Image
                            src="/cardProfile.png"
                            width={207}
                            height={50}
                            alt="logo"
                            className="z-15 object-contain relative"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
