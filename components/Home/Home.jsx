"use client"
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsFillPlayFill } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
import "./Home.css"
import { Sideward, Sideward2, Upward, textVariant } from '@/Framer';
import Lottie from 'lottie-react';
import Phone from "../../public/AnimationData/Phone.json"


const HomePage = () => {
    const HomeComment = "But say you want to use the store for Server Components because you are fetching data from an API and don't want to make multiple calls"
    return (
        <div id="Home">
            <div className="home section_padding">

                <section className="home-2 ">

                    <div className="home-2-box">
                        <motion.p {...textVariant} custom={.5} className="home-title">Reach Your Audience & Convert your leads</motion.p>
                        <motion.p {...Upward}>{HomeComment}</motion.p>
                        <div className='home-2-but'>
                            <motion.div {...Sideward} whileHover={{ scale: 1.08 }} whileTap={{ scale: .9 }} className="home-hello col-but">
                                Hello
                            </motion.div>
                            <motion.div {...Sideward2} whileHover={{ scale: 1.08 }} whileTap={{ scale: .9 }} className="home-hello tran-but">
                                <BsFillPlayFill size={20} /> See Demo
                            </motion.div>

                        </div>

                    </div>
                </section>
                <section className="home-3 ">
                    <div>
                        <div className="home-image">
                            <Lottie animationData={Phone} />
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default HomePage;
