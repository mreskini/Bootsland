import img from "../images/hero-section-image.png"
export default function Hero(){
    return (
        <div className="container-fluid">
            <div className="row col-11 mt-2 py-5 mx-auto">
                <div className="col-lg-6 pt-lg-5">
                    <p className="text-primary">
                        <span className="fs-14 bg-light-primary-color bold p-1 rounded">Ever Created For</span>
                    </p>
                    <div className="fs-55">
                        Let's work with <br />
                        <span className="text-primary-color display-3">Bootsland</span>
                    </div>
                    <p className="fs-20 normal text-muted lead">
                        Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.
                    </p>
                    <div className="row m-0 mt-5">
                        <div className="btn btn-primary-color py-2 col-lg-5">
                            Learn More
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="btn btn-outline-primary-color py-2 col-lg-5">
                            Get Started
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={img} alt="hero-image" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}