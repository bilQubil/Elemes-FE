import Image from "next/image";

interface NavbarProps {
    fontRubik: string;
}

export default function Navbar({ fontRubik }: NavbarProps) {
    return (
        <>
            {/* Desktop Navbar */}
            <div
                className={`navbar navbar--desktop ${fontRubik} hidden md:flex flex-row justify-around align-middle h-24 font-medium`}
            >
                <div className="navbar__logo mt-[19px]">
                    <Image
                        src="/logoElemes.svg"
                        width={207}
                        height={50}
                        alt="logo"
                    />
                </div>
                <div className="navbar__menu flex flex-row items-center gap-[16px] text-[14px] text-[#757575]">
                    <button className="navbar__menu-item hover:bg-gray-100 transition-all duration-200 py-2 px-4 rounded-4xl">
                        <p className="">Home</p>
                    </button>
                    <button className="navbar__menu-item hover:bg-gray-100 transition-all duration-200 py-2 px-4 rounded-4xl">
                        <p className="">About</p>
                    </button>
                    <div className="navbar__menu-item navbar__menu-item--with-badge relative flex items-center">
                        <button className="hover:bg-gray-100 transition-all duration-200 py-2 px-4 rounded-4xl">
                            <p className="">Promotions</p>
                        </button>
                        <span className="navbar__menu-badge absolute -top-0.5 right-0 bg-[#E7462D] text-white text-[8px] font-semibold px-2 py-[2px] rounded-full">
                            HOT
                        </span>
                    </div>
                    <button className="navbar__menu-item hover:bg-gray-100 transition-all duration-200 py-2 px-4 rounded-4xl">
                        <p className="">Blog</p>
                    </button>
                    <button className="navbar__menu-item hover:bg-gray-100 transition-all duration-200 py-2 px-4 rounded-4xl">
                        <p className="">Contact Us</p>
                    </button>
                </div>
                <div className="navbar__auth flex flex-row items-center">
                    <button className="navbar__auth-login flex justify-center hover:bg-gray-100 transition-all duration-200 py-2 px-4 rounded-4xl mr-5">
                        <p className="">Masuk</p>
                    </button>
                    <button className="navbar__auth-register bg-[#8BAC3E] hover:opacity-90 transition-all duration-200 rounded-4xl py-[10px] px-[18px]">
                        <p className="text-white font">Daftar Sekarang</p>
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="navbar navbar--mobile fixed bottom-0 left-0 right-0 bg-white md:hidden z-50 border-t border-gray-200">
                <div
                    className={`navbar__container ${fontRubik} flex justify-around items-center h-16`}
                >
                    <button className="navbar__menu-item flex flex-col items-center justify-center w-1/3 text-[#757575] hover:text-[#8BAC3E]">
                        <p className="text-[12px]">Home</p>
                    </button>
                    <div className="navbar__menu-item navbar__menu-item--with-badge relative flex flex-col items-center justify-center w-1/3">
                        <button className="text-[#757575] hover:text-[#8BAC3E]">
                            <p className="text-[12px]">Promotions</p>
                        </button>
                        <span className="navbar__menu-badge absolute -top-1 right-8 bg-[#E7462D] text-white text-[8px] font-semibold px-2 py-[2px] rounded-full">
                            HOT
                        </span>
                    </div>
                    <button className="navbar__menu-item flex flex-col items-center justify-center w-1/3 text-[#757575] hover:text-[#8BAC3E]">
                        <p className="text-[12px]">Others</p>
                    </button>
                </div>
            </div>
        </>
    );
}
