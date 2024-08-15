
function AboutPage({image}) {
    return (
        <div className="h-96 bg-green-100">
            <h1>About Page</h1>
            <p>This is the About Page!</p>
            <img className="max-w-60" src={image} />
        </div>
    )
}

export default AboutPage