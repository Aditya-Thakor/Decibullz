import ArticleCard from "./ArticleCard";
import artImg from '/src/assets/images/index'
export default function ArticlesSection() {
    const articles = [
        {
            img: artImg.articleImg3,
            header: "How Wellness Trends Are Driving Demand for Premium Hearing Protection",
            para: "How Wellness Trends Are Driving Demand for Premium Hearing Protection In recent years, “wellness” has evolved beyond yoga mats, organic smoothies, and step-counting apps. Today, wellness is holisti..."
        },
        {
            img: artImg.articleImg2,
            header: "Why More People are Choosing Custom Molded Earplugs",
            para: "In a world where sound pollution is constantly on the rise, the importance of protecting our hearing cannot be overstated. Custom molded earplugs, like Decibullz, are becoming the go-to solution f..."
        },
        {
            img: artImg.articleImg1,
            header: "Custom Molded Earpieces a Better Choice for Radio and Communication",
            para: "The Superior Choice for Police, Fire, EMS, Security, and More In the high-stakes world of professional communication, clarity and comfort are not just preferences, they are necessities. This is es..."
        },
    ]
    return (
        <div className="h-auto lg:h-screen px-10 mb-5 lg:mb-0">
            <div className="flex flex-col sm:flex-row h-1/6 justify-between py-10">
                <h2 className="text-2xl sm:text-4xl font-bold">FEATURED ARTICLES</h2>
                <span>View All</span>
            </div>
            <div className="flex flex-col sm:flex-row h-4/5 justify-center gap-10 ">
                {articles.map((art, ind) => (
                    <ArticleCard
                        key={ind}
                        img={art.img}
                        header={art.header}
                        para={art.para}
                    />
                ))}
            </div>
        </div>
    )
}