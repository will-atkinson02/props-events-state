
function FeaturedArticle({image, title, para}) {
    return (
        <div>
            <div className="flex justify-center">
                <img src={image} className="w-1/2" />
            </div>
            <div className="w-3/4 mx-auto">
                <h2>{title}</h2>
                <p className="bg-orange-300">{para}</p>
            </div>
            
        </div>
    )
}

export default FeaturedArticle