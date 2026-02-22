export default function ArticleCard ({img, header, para}){
    return (
        <div className="h-full w-full sm:w-1/3">
            <div className="h-1/2 sm:h-1/3 lg:h-1/2">
                <img src={img} alt="article-img" className="h-full w-full" />
            </div>
            <div className=" h-1/2 flex flex-col gap-3">
                <h2 className="text-xl lg:text-3xl font-bold" >{header}</h2>
                <span className="text-gray-500 text-xs sm:text-sm" > {para}</span>
            </div>
        </div>
    )
}