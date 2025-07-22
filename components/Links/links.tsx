import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { SlPhone } from "react-icons/sl";


{/* the navbar abd foter links*/ }
export const navLinks = [
    { page: 'Home', link: '/' },
    { page: 'About', link: '/about' },
    { page: 'Product', link: '/product' },
    { page: 'Contact Us', link: '/contact' },
]

{/* the website social links and icons*/ }
export const socials = [
    { icon: <FaInstagram color='' size={30} />, link: '', },
    { icon: <FaFacebook color='' size={30} />, link: '', },
    { icon: <FaXTwitter color='' size={30} />, link: '', },
]

{/* the contact page contact details*/ }
export const info = [
    { icon: <LuMapPin color='#FF0000' size={22} />, title: 'Address', details: '4, green zone, ikeja, Lagos state, Nigeria.' },
    { icon: <SlPhone color='#FF0000' size={22} />, title: 'Phone anumber', details: '+234-80-998-909-32' },
    { icon: <CiMail color='#FF0000' size={22} />, title: 'Email', details: 'Sample@mail.com' },
]