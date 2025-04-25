import Carousel from "./carousel";

export type CategoryName =
    | "Cupcake"
    | "Pizza"
    | "Kebab"
    | "Salmon"
    | "Doughnut";

export const categoryColor: Record<CategoryName, string> = {
    Cupcake: "#F0FEEB",
    Pizza: "#E4F2F4",
    Kebab: "#EAEEFA",
    Salmon: "#F9EEF3",
    Doughnut: "#F3F7D9",
};

const slides = [
    {
        id: 1,
        name: "Cupcake",
        imageUrl: "/kue.png",
        items: 10,
    },
    {
        id: 2,
        name: "Pizza",
        imageUrl: "/pizza.png",
        items: 25,
    },
    {
        id: 3,
        name: "Kebab",
        imageUrl: "/kebab.png",
        items: 12,
    },
    {
        id: 4,
        name: "Salmon",
        imageUrl: "/salmon.png",
        items: 12,
    },
    {
        id: 5,
        name: "Doughnut",
        imageUrl: "/donat.png",
        items: 11,
    },
    {
        id: 6,
        name: "Cupcake",
        imageUrl: "/kue.png",
        items: 12,
    },
];

export default function Category() {
    return (
        <div className="category flex flex-col max-w-7xl mx-auto px-4 md:px-0">
            <div className="category__header pl-0 md:pl-5 md:ml-7">
                <h1 className="category__title text-[28px] md:text-[38px] text-black font-medium text-center md:text-left">
                    Browser Our Category
                </h1>
                <h1 className="category__subtitle text-[28px] md:text-[38px] text-[#8BAC3E] font-medium text-center md:text-left">
                    Receipt
                </h1>
            </div>
            <Carousel slides={slides} categoryColors={categoryColor} />
        </div>
    );
}
