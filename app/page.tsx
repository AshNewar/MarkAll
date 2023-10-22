
import Image from 'next/image'
import styles from './page.module.css'
import HomePage from '@/components/Home/Home'
import Features from '@/components/Features/Features.jsx'
import Testomonial from '@/components/Testomonial/Testomonial.jsx'
import Contact from '@/components/Contact/Contact.jsx'
import { Toaster } from 'react-hot-toast'
import GoToTop from '@/components/Features/GoToTop'


export default function Home() {
  return (
    <>
      <HomePage />
      <Features />
      <Testomonial />
      <Contact />
      <GoToTop />
      <Toaster />
    </>
  )
}
