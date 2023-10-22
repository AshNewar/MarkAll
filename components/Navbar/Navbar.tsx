"use client"
import { NavItems } from "../../constant/constants.js"
import { useState } from "react"
import Link from "next/link"
import './Navbar.css';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Spin as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion"
import { Leftward, Sideward, Upward } from "@/Framer/index.js";

const Navbar = () => {
    const [click, setClick] = useState(false);
    function clickHandler() {
        setClick(!click);
    }
    return (
        <>
            <div className="navbar section_padding">
                <div>Newar</div>
                <div className="nav-bar">
                    <ul className="nav-item">
                        {NavItems.map((item, i) => (
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={i} key={i}>

                                <Link href={item.href} className="nav-link">{item.item}</Link>
                            </motion.div>
                        ))}
                    </ul>
                </div>
                <div className="nav-menu">
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <Hamburger size={20} toggled={click} toggle={clickHandler} />

                    </motion.div>

                </div>
                <motion.div {...Upward} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="nav-button">Get Started
                </motion.div>

            </div>
            {click &&
                <motion.div {...Sideward} className="nav-side">
                    <ul className="nav-item-side">
                        {NavItems.map((item, i) => (
                            <motion.div whileHover={{ scale: 1.2 }} {...Leftward} custom={i} key={i}>
                                <Link href={item.href} key={i}>{item.item}</Link>
                            </motion.div>

                        ))}
                    </ul>
                </motion.div>
            }

        </>
    )
}

export default Navbar
