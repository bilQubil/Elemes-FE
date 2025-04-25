import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Category from "@/components/category";
import Trending from "@/components/trending";
import Footer from "@/components/footer";

interface HomeProps {
    readonly fontRubik: string;
}

export default function Home({ fontRubik }: HomeProps) {
    return (
        <div className="page h-screen w-screen relative max-w-8xl mx-auto overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <Navbar fontRubik={fontRubik} />
            <Hero />
            <Category />
            <Trending />
            <Footer fontRubik={fontRubik} />
        </div>
    );
}
