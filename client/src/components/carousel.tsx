"use client";

import Image from "next/image";

interface Slide {
    id: number;
    name?: string;
    imageUrl?: string;
    items: number;
}

interface CarouselProps {
    slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    return (
        <div className="relative w-full max-w-5xl mx-auto py-8">
            {/* Carousel Container */}
            <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="snap-start flex-shrink-0 w-48 h-64 flex flex-col items-center justify-center rounded-lg shadow-md"
                    >
                        <Image
                            src={slide.imageUrl}
                            alt={slide.name}
                            width={96}
                            height={96}
                            className="w-24 h-24 object-contain mb-4"
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
            <div className="flex justify-center mt-4 space-x-4">
                <button
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
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
                    <span className="text-xl text-gray-600">←</span>
                </button>
                <button
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
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
                    <span className="text-xl text-gray-600">→</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
