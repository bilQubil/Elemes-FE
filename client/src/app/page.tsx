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
        </div>
    );
}
