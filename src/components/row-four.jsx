import img from "../images/row-four-section-image.png"
import person from "../images/row-four-person-image.jpg"
export default function RowFour(){
    return (
        <div className="container-fluid">
            <div className="row col-11 my-2 py-2 mx-auto">
                <div className="col-lg-6 pt-lg-5">
                    <div className="fs-45 pt-5">
                        Bootsland Focus on your success
                    </div>
                    <p className="fs-20 normal text-muted lead">
                        We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <div class="d-flex align-items-center">
                        <img alt="PersonImage" src={person} class="shadow-primary img-fluid rounded-circle d-inline mr-3 w-25 p-3" />
                        <div>
                            <h5>
                                Mohammad Eskini
                            </h5>
                            <span class="text-muted">
                                Full Stack Developer
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                    <img src={img} alt="hero-image" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}