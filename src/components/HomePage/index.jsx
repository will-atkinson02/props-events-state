
function HomePage({image}) {
    return (
        <div className="h-96 bg-blue-100">
            <h1>Home Page</h1>
            <p>This is the Home Page!</p>
            <img className="max-w-60" src={image} />
            
        </div>
    )
}

export default HomePage