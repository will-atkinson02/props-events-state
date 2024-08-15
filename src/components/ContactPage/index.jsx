
function ContactPage({image}) {
    return (
        <div className="h-96 bg-red-100">
            <h1>Contact Page</h1>
            <p>This is the Contact Page!</p>
            <img className="max-w-60" src={image} />
        </div>
    )
}

export default ContactPage