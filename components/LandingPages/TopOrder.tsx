import Image from 'next/image';
import React from 'react';
import { bestSellers } from '../Data/SampleData';
import * as motion from "motion/react-client";



// landing page component for best sellers
function TopOrder() {
    return (
        <section className="py-10">
          
            <div className="flex flex-col items-center gap-2 text-xl md:text-2xl font-semibold text-primary mb-8">
                <h2>Best sellers</h2>
                <div className="bg-custom h-[5px] w-[70px] rounded"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">
                {bestSellers.map(({ name, desc, img }, index) => (
                    <motion.div
                        key={index}
                        className="w-full flex flex-col items-center shadow-xl py-6 cursor-pointer px-4 rounded-md md:w-[500px] md:justify-center bg-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="overflow-hidden w-full md:w-[400px] md:h-[300px] h-[250px] sm:h-[300px] rounded">
                            <Image
                                className="w-full h-full object-cover"
                                src={img}
                                alt={name}
                                priority
                            />
                        </div>
                        <div className="text-center grid gap-2 mt-4">
                            <p className="text-lg font-semibold text-primary">{name}</p>
                            <p className="text-sm text-custom">{desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default TopOrder;
