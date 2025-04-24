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
                <div className="flex flex-row items-center gap-[32px] text-[14px] text-[#757575]">
                    <p className="">Home</p>
                    <p className="">About</p>
                    <p className="">Promotion</p>
                    <p className="">Blog</p>
                    <p className="">Contact Us</p>
                </div>
                <div className="flex flex-row items-center">
                    <p className="pr-5">Masuk</p>
                    <button className="bg-[#8BAC3E] rounded-4xl py-[10px] px-[18px]">
                        <p className="text-white font">Daftar Sekarang</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
