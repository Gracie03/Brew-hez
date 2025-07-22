'use client'

import Link from "next/link";
import CustomButton from "../CustomComponents/CustomButton";
import { navLinks, socials } from "../Links/links";


{/* the website main footer*/ }
const Footer = () => {

    return (
        <section>
            <div className="grid grid-cols-1 gap-4 py-5 h-[200px] bg-custom text-accent px-5 rounded-t">
                <div className="flex items-center justify-between ">
                    <ul className="flex gap-10">
                        {
                            navLinks.map(({ page, link }, index) => (
                                <li
                                    key={index}
                                    className="text-[1rem] font-semibold"
                                >
                                    <Link href={link}>{page}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="">
                        <CustomButton
                            title="Order now"
                            handleClick={() => { }}
                            className="hover:!text-accent hover:!border-accent "
                        />
                    </div>
                </div>
                <div className="">
                    <hr className="" />
                </div>
                <div className=" flex justify-between items-center">
                    <p className="text-[0.9rem]">&copy; 2025 BrewHez. All rights reserved.</p>
                    <div className="">
                        <div className="flex items-center gap-10">
                            {
                                socials.map(({ icon, }, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer"
                                    >
                                        <span className="text-white">{icon}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Footer;