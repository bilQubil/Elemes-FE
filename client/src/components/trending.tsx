import Image from "next/image";
import { CategoryName, categoryColor } from "./category";

const trending = [
    {
        id: 1,
        name: "Pizza Paperoni",
        category: "Pizza",
        imageUrl: "/pizzaPhoto.png",
        rating: 4,
    },
    {
        id: 2,
        name: "Pizza Meat",
        category: "Pizza",
        imageUrl: "/pizzaMeatPhoto.png",
        rating: 3,
    },
    {
        id: 3,
        name: "Doner Kebab",
        category: "Kebab",
        imageUrl: "/kebabPhoto.png",
        rating: 5,
    },
    {
        id: 4,
        name: "Salmon Roll",
        category: "Salmon",
        imageUrl: "/sushiPhoto.png",
        rating: 4,
    },
    {
        id: 5,
        name: "Cupcake Choco",
        category: "Cupcake",
        imageUrl: "/cookiePhoto.png",
        rating: 4,
    },
    {
        id: 6,
        name: "Doughnut Milk",
        category: "Doughnut",
        imageUrl: "/donatPhoto.png",
        rating: 5,
    },
    {
        id: 7,
        name: "Doughnut Unicorn",
        category: "Doughnut",
        imageUrl: "/donatPinkPhoto.png",
        rating: 4,
    },
    {
        id: 8,
        name: "Kathi Kebab",
        category: "Kebab",
        imageUrl: "/kathiKebabPhoto.png",
        rating: 4,
    },
];

export default function Trending() {
    return (
        <div className="trending flex flex-col max-w-7xl mx-auto px-4 md:px-0">
            <div className="trending__header p-5 md:ml-7">
                <h1 className="trending__title text-[28px] md:text-[38px] text-black font-medium text-center md:text-left">
                    Browse Our Trending
                </h1>
                <h1 className="trending__subtitle text-[28px] md:text-[38px] text-[#8BAC3E] font-medium text-center md:text-left">
                    Receipt
                </h1>
            </div>
            <div className="trending__content py-4 px-4 md:px-10 flex flex-col">
                <ul className="trending__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {trending.map((item) => (
                        <li
                            key={item.id}
                            className="trending__item bg-white rounded-2xl p-4 shadow-xl/3 hover:shadow-xl/3 transition-all duration-200 hover:scale-105"
                            style={{
                                backgroundColor:
                                    categoryColor[
                                        item.category as CategoryName
                                    ] || "#FFFFFF",
                            }}
                        >
                            <div className="trending__item-image relative h-32 mb-4">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    width={128}
                                    height={128}
                                    className="object-contain rounded-xl"
                                />
                            </div>
                            <h3 className="trending__item-title text-[26px] font-medium mb-1">
                                {item.name}
                            </h3>
                            <p className="trending__item-category text-[#8BAC3E] text-[18px] font-medium mb-2">
                                {item.category}
                            </p>
                            <div className="trending__item-rating flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className={`trending__item-star w-4 h-4 ${
                                            index < item.rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="trending__footer flex justify-center mt-8">
                <button className="trending__view-all bg-[#8BAC3E] hover:opacity-90 transition-all duration-200 rounded-4xl py-[10px] px-[24px] text-white text-[14px] font-medium inline-block">
                    ALL Receipt
                </button>
            </div>
        </div>
    );
}
