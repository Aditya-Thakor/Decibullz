import ArticleCard from "./ArticleCard";
import artImg from '/src/assets/images/index'
export default function ArticlesSection(){
    return(
        <div className="h-screen px-10">
           <div className="flex h-1/6 justify-between py-10">
                <h2 className="text-4xl font-bold">FEATURED ARTICLES</h2>
                <span>View All</span>
           </div>
           <div className="flex h-4/5 justify-center gap-10 ">
                <ArticleCard 
                    img={artImg.articleImg3} 
                    header="How Wellness Trends Are Driving Demand for Premium Hearing Protection" 
                    para="How Wellness Trends Are Driving Demand for Premium Hearing Protection In recent years, “wellness” has evolved beyond yoga mats, organic smoothies, and step-counting apps. Today, wellness is holisti..."
                />
                <ArticleCard 
                    img={artImg.articleImg2} 
                    header="Why More People are Choosing Custom Molded Earplugs" 
                    para="In a world where sound pollution is constantly on the rise, the importance of protecting our hearing cannot be overstated. Custom molded earplugs, like Decibullz, are becoming the go-to solution f..."
                />
                <ArticleCard 
                    img={artImg.articleImg1} 
                    header="Custom Molded Earpieces a Better Choice for Radio and Communication" 
                    para="The Superior Choice for Police, Fire, EMS, Security, and More In the high-stakes world of professional communication, clarity and comfort are not just preferences, they are necessities. This is es..."
                />
           </div>
        </div>
    )
}