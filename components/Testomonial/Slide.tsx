import "./Testomonial.css"
import Image from "next/image"
const Slide = () => {
    const comment = "This API reference will help you understand how to use props and configuration options available for the Image Component. For features and usage, please see the Image Component page."
    return (
        <div className="slider section_padding">
            <div>
                <Image src={"/my.webp"} alt={"Hello"} width={100} height={100} className="slider-image" />
            </div>
            <div className="slider-contain">
                <p className="feat-details">{comment}</p>
            </div>
            <div>
                <div className="slider-name">Ashish Newar</div>
                <div className="slider-post">Web Developer</div>
            </div>

        </div>
    )
}

export default Slide
