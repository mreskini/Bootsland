import img1 from "../images/row-three-image-one.svg"
import img2 from "../images/row-three-image-two.svg"
import img3 from "../images/row-three-image-three.svg"
import img4 from "../images/row-three-image-four.svg"
import img5 from "../images/row-three-image-five.svg"
export default function RowThree(){
    const createItem = (title, details, image) => {
        return(
            <div class="col-lg-4 col-md-6">
                <div class="bg-primary-soft rounded p-5">
                    <div class="d-flex align-items-center mb-4">
                        <div class="mr-3">
                            <img class="img-fluid" src={image} alt="" />
                        </div>
                        <h5 class="m-0 text-light">
                        {
                            title
                        }
                        </h5>
                    </div>
                    <p class="mb-0">
                    {
                        details
                    }
                    </p>
                </div>
            </div>
        )
    }
    return(
        <>
            <div className="shape-1 top" style={ { height: "150px", overflow: "hidden", } }>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={ { height: "100%", width: "100%", } }>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={ { stroke: "none", fill: "#060927", } }></path>
                </svg>
            </div>
            <div className="container-fluid bg-dark-bluish">
                <div className="col-lg-11 py-5 mx-auto">
                    <div className="row">
                        <div class="col-lg-4 col-md-6 mb-8 mb-lg-0 text-white">
                            <h2 class="mt-5 mb-0">One Platform, Deep Insight Why Choose Bootsland</h2>
                        </div>
                        {
                            createItem(
                                "App Development",
                                "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.",
                                img1,
                            )
                        }
                        {
                            createItem(
                                "Clean Code",
                                "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.",
                                img2,
                            )
                        }
                        {
                            createItem(
                                "Software Development",
                                "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.",
                                img3,
                            )
                        }
                        {
                            createItem(
                                "Easy to customize",
                                "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.",
                                img4,
                            )
                        }
                        {
                            createItem(
                                "24/7 Support",
                                "Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.",
                                img5,
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="shape-1" style={ { height: "150px", overflow: "hidden", } }>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={ { height: "100%", width: "100%", } }>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={ { stroke: "none", fill: "#060927", } }></path>
                </svg>
            </div>
        </>
    )
}