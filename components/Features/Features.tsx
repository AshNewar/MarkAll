"use client"
import "./Features.css"
import Lottie from "lottie-react"
import Security from "../../public/AnimationData/Security.json"
import Automation from "../../public/AnimationData/Automation.json"
import { BsArrowRight } from "react-icons/bs"
import { MdMotionPhotosAuto } from "react-icons/md"
import { motion } from "framer-motion"
import { Leftward, Sideward, Sideward2, Upward } from "@/Framer"

const Features = () => {
    const Content = "Know your audience and boost sales"
    const Content2 = "Save precious time with automation";
    const EmailContent = "Effective emails convey the most significant substance to a client at the proper time which is our marketing approaches include scheduled emails."
    return (
        <div id="Features" className="section_padding features">
            <div>
                <motion.p className="feat-sub" {...Upward}>OUR FEATURES</motion.p>
                <motion.p className='slider-para' {...Sideward}>What We Can Do For You?</motion.p>


            </div>

            <div className="feat-sec1">
                <div className="feat-anim-container" >
                    <Lottie animationData={Security} className="feat-anim" />
                </div>
                <div className="feat-content">
                    <motion.p {...Leftward} custom={1} className="feat-title">{Content}</motion.p>

                    <motion.p {...Sideward2} className="feat-details">{EmailContent}</motion.p>
                    <motion.div whileHover={{ scale: 1.05 }} className="knowMore" {...Sideward}>Know More <BsArrowRight /> </motion.div>

                </div>

            </div>

            <div className="feat-sec2">

                <div className="feat-content box2">
                    <motion.p {...Leftward} custom={1} className="feat-title">{Content2}</motion.p>

                    <motion.p {...Sideward2} className="feat-details">{EmailContent}</motion.p>
                    <motion.div whileHover={{ scale: 1.05 }} className="knowMore" {...Sideward}>Know More <BsArrowRight /> </motion.div>


                </div>
                <div className="feat-anim-container  box1" >
                    <Lottie animationData={Automation} className="feat-anim" />

                </div>

            </div>


        </div>
    )
}

export default Features
