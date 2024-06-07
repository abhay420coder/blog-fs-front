import { Link } from "react-router-dom";


const BlogEditor = () =>{
    const devlog = 'https://assets.zyrosite.com/m7VpbKKGQGTllx2l/ai-logo-mk3DJ9vN9Nf7N5xV.svg'
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="flex-none w-16">
                    <img src={devlog} />
                </Link>

                <p className="max-md:hidden text-black line-clamp-1 w-full">
                    New Blog
                </p>

                <div className="flex gap-4 ml-auto">
                    <button className="btn-dark py-2">Publish</button>
                    <button className="btn-light py-2">Save Draft</button>
                </div>
            </nav>
        </>
    )
}

export {BlogEditor};