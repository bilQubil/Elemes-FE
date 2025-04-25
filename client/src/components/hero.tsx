import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero flex flex-col md:flex-row items-center h-auto md:h-[650px] w-full relative overflow-hidden px-4 md:px-0 py-8 md:py-0">
            <div className="hero__content flex flex-col basis-full md:basis-1/2 md:ml-[120px] justify-center space-y-6 text-center md:text-left">
                <h1 className="hero__title text-[#8BAC3E] text-[40px] md:text-[64px] font-medium leading-tight md:leading-[60px]">
                    Good Food Us <br />
                    Good Mood
                </h1>
                <p className="hero__description p-2 max-w-md mx-auto md:mx-0 leading-relaxed text-[#757575]">
                    I would think that conserving our natural resources should
                    be a conservative position: Not to waste food, and not to
                    throw away a lot of the food that we buy.
                </p>
                <div className="hero__cta flex flex-row py-4 justify-center md:justify-start">
                    <button className="hero__cta-primary bg-[#8BAC3E] hover:opacity-90 transition-all duration-200 rounded-4xl py-[10px] px-[18px] shadow-[0_4px_20px_#666BE259]">
                        <p className="text-white text-[14px] font-medium">
                            Daftar Sekarang
                        </p>
                    </button>
                    <button className="hero__cta-secondary bg-[#F2F2F2] hover:bg-[#e6e6e6] transition-all duration-200 rounded-4xl py-[10px] px-[18px] ml-2">
                        <p className="text-black text-[14px] font-medium">
                            About us
                        </p>
                    </button>
                </div>
            </div>
            <div className="hero__image basis-full md:basis-1/2 flex justify-center mr-0 md:mr-25 mt-8 md:mt-0">
                <div className="hero__image-container relative w-[412px] h-[414px]">
                    <div className="hero__image-background absolute -bottom-11 -right-12 w-[510px] h-[510px] bg-[#C4C4C4] opacity-15 rounded-full z-0"></div>
                    <Image
                        src="/mangkok.png"
                        width={412}
                        height={414}
                        alt="hero image"
                        className="hero__image-main object-contain relative z-10"
                    />
                </div>
                <div className="hero__profile-card absolute right-110 top-114">
                    <Image
                        src="/cardProfile.png"
                        width={297}
                        height={75}
                        alt="profile card"
                        className="z-15 object-contain relative"
                    />
                </div>
            </div>
        </div>
    );
}
