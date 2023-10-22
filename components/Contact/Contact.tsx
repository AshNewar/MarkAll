"use client"
import React, { useRef, useState } from 'react'
import "./Contact.css";
import Lottie from 'lottie-react';
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsYoutube, BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs"
import { MdLocationPin } from "react-icons/md"
// import { SocialMedia } from '../../assets';
import { motion } from "framer-motion"
import { Leftward, Rightward, Sideward, Upward } from '../../Framer';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

//service Id =service_rwt8hw3
//templateId =template_z115yci
//oWwXP9h9HqpApEv8O

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const emailJsService = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE as string;
        const emailJSTemplate = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE as string;

        emailjs.send(
            emailJsService,
            emailJSTemplate,
            {
                from_name: form.name,
                to_name: "Ashish Newar",
                from_email: form.email,
                to_email: "nashish22@iitk.ac.in",
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY)
            .then(() => {
                setLoading(false);
                setForm({
                    name: "",
                    email: "",
                    message: ""
                })
                toast.success("Message sent Successfully")
            }, (error) => {
                setLoading(false);
                console.log(error);
                toast.error("Opps! Something went wrong");
            });

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log(form)


    }
    return (
        <div id="Contact" className='contactPage'>
            <div>
                <motion.p {...Upward} className="feat-sub">Contact</motion.p>
                <motion.p {...Sideward} className='slider-para' >Wanna Contact Me?</motion.p>
            </div>
            <div className='contact section_margin'>

                <motion.div {...Leftward} className='contact-1'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className='contact-item'>
                            <label>Name</label>
                            <input
                                type="text"
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's Ur Name?"
                                className='contact-input' />
                        </div>
                        <div className='contact-item'>
                            <label>Email</label>
                            <input
                                type="email"
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's Ur Email?"
                                className='contact-input' />
                        </div>
                        <div className='contact-item'>
                            <label>Message</label>
                            <textarea
                                rows={5} cols={35}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What's Ur Message"
                                className='contact-input' />
                        </div>
                        <motion.button disabled={loading} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1, color: "#f5f3f0", backgroundColor: "#bdbab7" }} type="submit" className="contact-btn">Send</motion.button>

                    </form>

                </motion.div>
                <div className='contact-list'>
                    <motion.div {...Leftward} custom={1} className="contact-list-item">
                        <p className='cont-icons'><BsFillTelephoneFill /> Contact No. </p>
                        <p>+919354566860</p>

                    </motion.div>
                    <motion.div {...Leftward} custom={2} className="contact-list-item">
                        <p className='cont-icons'><BsFillEnvelopeFill />Email</p>
                        <p>info@markall.in</p>

                    </motion.div>
                    <motion.div {...Leftward} custom={3} className="contact-list-item">
                        <p className='cont-icons'><MdLocationPin />Location</p>
                        <p>Ghaziabad, Uttar Pradesh</p>

                    </motion.div>
                    <div className='gap2'>
                        <motion.div {...Rightward} custom={1} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                            <BsYoutube />

                        </motion.div>
                        <motion.div {...Rightward} custom={2} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                            <BsInstagram />

                        </motion.div>
                        <motion.div {...Rightward} custom={3} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                            <BsTwitter />

                        </motion.div>
                        <motion.div {...Rightward} custom={4} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                            <BsFacebook />

                        </motion.div>
                        <motion.div {...Rightward} custom={5} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                            <BsLinkedin />

                        </motion.div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Contact