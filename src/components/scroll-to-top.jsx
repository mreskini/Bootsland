import { BsChevronUp } from "react-icons/bs"
export default function ScrollToTop(){
    window.onscroll = () => {
        let btn = document.getElementById("btn-scroll-to-top")
        window.pageYOffset > 200 ? (btn.classList.remove("d-none")) : (btn.classList.add("d-none"))
    };
    return (
        <div className="btn btn-primary-color py-2 btn-to-top d-none" id="btn-scroll-to-top" onClick={ () => window.scrollTo(0,0) }>
            <BsChevronUp className="h5 my-auto bold" />
        </div>
    )
}