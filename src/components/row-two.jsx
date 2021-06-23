import img from "../images/row-two-section-image.png"
export default function RowTwo(){
    return(
        <>
            <div className="container-fluid">
                <div className="row col-11 my-3 py-3 mx-auto">
                    <div className="col-lg-5 mt-5 pt-5">
                        <img src={img} alt="hero-image" className="img-fluid" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 pt-lg-5">
                        <p className="text-primary">
                            <span className="fs-14 bg-light-primary-color bold p-1 rounded">
                                Lorem, ipsum dolor
                            </span>
                        </p>
                        <div className="fs-45">
                            We're A Creative Software Landing Page
                        </div>
                        <p className="fs-20 normal lead">
                            We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                        <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="badge-primary-soft rounded p-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check align-middle">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div className="mb-0 ml-3"> Based On Bootstrap 4 </div>
                            </div>
                        </div>
                        <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="badge-primary-soft rounded p-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check align-middle">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div className="mb-0 ml-3"> Fully Responsive </div>
                            </div>
                        </div>
                        <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="badge-primary-soft rounded p-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check align-middle">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div className="mb-0 ml-3"> SVG Icon </div>
                            </div>
                        </div>
                        <div className="row m-0 mt-5">
                            <div className="btn btn-outline-primary-color py-2 col-lg-5">
                                Learn More
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}