'use client';

import Link from "next/link";
import { navLinks, socials } from "../Links/links";


// page custom footer
const Footer = () => {


    return (
        <section>
            <div className="grid grid-cols-1 gap-4 py-6 bg-custom text-accent px-4 sm:px-6 rounded-t">
                {/* Top Section: Nav + Button */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Nav Links */}
                    <ul className="flex flex-wrap justify-center md:justify-start gap-6">
                        {navLinks.map(({ page, link }, index) => (
                            <li key={index} className="text-[1rem] font-semibold">
                                <Link href={link}>{page}</Link>
                            </li>
                        ))}
                    </ul>

                </div>

                <hr className="border-accent/40 my-2" />

                {/* Bottom Section: Copyright + Socials */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
                    <p className="text-[0.875rem] text-center md:text-left">
                        &copy; 2025 BrewHez. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {socials.map(({ icon }, index) => (
                            <div key={index} className="cursor-pointer text-white text-lg">
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
