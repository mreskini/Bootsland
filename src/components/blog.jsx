import { useState } from "react"
import blog1 from "../images/blog-1.png"
import blog2 from "../images/blog-2.png"
import blog3 from "../images/blog-3.png"
export default function Blog(){
    const createBlogItemTemplate = (title, description, image) => {
        return(
            <div className="col-lg-4 p-0 pr-5">
                <img src={image} className="img-fluid rounded shadow bg-white" alt="Blog" />
                <div className="fs-25 px-4 text-dark mt-4">
                    {
                        title
                    }
                </div>
                <p className="text-light-grey px-4">
                    {
                        description
                    }
                </p>
                <div className="col-lg-12 text-right">
                    <a className="btn btn-light-grey">
                        Read More
                    </a>
                </div>
            </div>
        )
    }
    const [blogs, setBlogs] = useState([
        {
            title: "Bootsland Perfect Performance landing Page",
            description: "Businesses need access to development resources serspiciatis unde omnis iste natus error.",
            image: blog1,
        },
        {
            title: "The most powerfull template that make you.",
            description: "Businesses need access to development resources serspiciatis unde omnis iste natus error.",
            image: blog2,
        },
        {
            title: "A brand for a company is like a reputation person.",
            description: "Businesses need access to development resources serspiciatis unde omnis iste natus error.",
            image: blog3,
        },
    ])
    return (
        <div className="container-fluid bg-light py-5">
            <div className="row col-11 my-2 py-2 mx-auto">
                {
                    blogs.map(blog => createBlogItemTemplate(blog.title, blog.description, blog.image))
                }
            </div>
        </div>
    )
}