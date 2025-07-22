"use client";

import Link from "next/link";
import { GiCoffeeCup } from "react-icons/gi";
import { navLinks } from "../Links/links";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client"


{/* the website main navbar*/ }
const Navbar = () => {

    const pathname = usePathname();

    return (
        <>
            <nav className="flex items-center justify-between px-5 py-3 drop-shadow-md bg-white ">
                <div className="flex flex-col w-[100px] bg-primary items-center rounded-md p-[2px]">
                    <span><GiCoffeeCup color="#FFFF00" size={20} /></span>
                    <p className="text-[1rem] font-semibold text-accent italic">BrewHez</p>
                </div>
                <div className="">
                    <ul className="flex gap-10"
                    >
                        {
                            navLinks.map(({ page, link }, index) => (
                                <motion.li
                                    key={index}
                                    className={`text-[1.2rem] font-semibold ${pathname === link ? 'text-primary' : 'text-custom'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    <Link href={link}>{page}</Link>
                                </motion.li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar;