"use client";

import Image from "next/image";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

interface Slide {
    id: number;
    name: string;
    imageUrl: string;
    items: number;
}

interface CarouselProps {
    slides: Slide[];
    categoryColors: Record<string, string>;
}

const Carousel: React.FC<CarouselProps> = ({ slides, categoryColors }) => {
    return (
        <div className="relative w-full max-w-[1200px] mx-auto py-8">
            {/* Carousel Container */}
            <div className="overflow-x-auto snap-x snap-mandatory flex space-x-5 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="snap-start flex-shrink-0 w-52 h-40 flex flex-col items-center justify-center rounded-lg shadow-md transition-transform hover:scale-110"
                        style={{
                            backgroundColor:
                                categoryColors[slide.name] || "#FFFFFF",
                        }}
                    >
                        <Image
                            src={slide.imageUrl}
                            alt={slide.name}
                            width={48}
                            height={48}
                            className="object-contain mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">
                            {slide.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {slide.items} Items
                        </p>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute -bottom-4 right-0 space-x-4 flex">
                <button
                    className="w-24 h-12 bg-[#8BAC3E] rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition-all duration-200 text-white"
                    onClick={() => {
                        const container =
                            document.querySelector(".overflow-x-auto");
                        if (container)
                            container.scrollBy({
                                left: -200,
                                behavior: "smooth",
                            });
                    }}
                >
                    <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-1">
                        <IoChevronBackOutline className="text-[#8BAC3E]" />
                    </span>
                    <span className="font-medium">PREV</span>
                </button>
                <button
                    className="w-24 h-12 bg-[#8BAC3E] rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition-all duration-200 text-white"
                    onClick={() => {
                        const container =
                            document.querySelector(".overflow-x-auto");
                        if (container)
                            container.scrollBy({
                                left: 200,
                                behavior: "smooth",
                            });
                    }}
                >
                    <span className="font-medium">NEXT</span>
                    <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center ml-1">
                        <IoChevronForwardOutline className="text-[#8BAC3E]" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
