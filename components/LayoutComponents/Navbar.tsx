"use client";

import Link from "next/link";
import { GiCoffeeCup } from "react-icons/gi";
import { navLinks } from "../Links/links";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";



// page custom navbar
const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white drop-shadow-md px-5 py-3">
            <div className="flex items-center justify-between">
                
                <div className="flex flex-col w-[100px] bg-primary items-center rounded-md p-[2px]">
                    <span><GiCoffeeCup color="#FFFF00" size={20} /></span>
                    <p className="text-[1rem] font-semibold text-accent italic">BrewHez</p>
                </div>

                
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                    </button>
                </div>

                
                <ul className="hidden md:flex gap-10">
                    {navLinks.map(({ page, link }, index) => (
                        <motion.li
                            key={index}
                            className={`text-[1.2rem] font-semibold ${pathname === link ? 'text-primary' : 'text-custom'}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <Link href={link}>{page}</Link>
                        </motion.li>
                    ))}
                </ul>
            </div>

           
            {isOpen && (
                <ul className="flex flex-col gap-5 mt-4 md:hidden">
                    {navLinks.map(({ page, link }, index) => (
                        <motion.li
                            key={index}
                            className={`text-[1.2rem] font-semibold ${pathname === link ? 'text-primary' : 'text-custom'}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(false)} // Close on click
                        >
                            <Link href={link}>{page}</Link>
                        </motion.li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
