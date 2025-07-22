import Image from 'next/image';
import React from 'react';
import { bestSellers } from '../Data/SampleData';
import * as motion from "motion/react-client"


{/* a seperate component for the landing page */ }

function TopOrder() {

    return (
        <>
            <section className='py-10 ' >
                <div className="flex flex-col items-center gap-2 text-[24px] font-semibold text-primary mb-8">
                    <h2>Best sellers</h2>
                    <div className="bg-custom h-[5px] w-[70px] rounded"></div>
                </div>
                <div className="flex items-center justify-center gap-10">
                    {
                        bestSellers.map(({ name, desc, img }, index) => (
                            <motion.div
                                key={index}
                                className="w-[350px] flex flex-col items-center shadow-xl py-6 cursor-pointer px-2 rounded-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <div className="overflow-hidden w-[300px] h-[350px] rounded">
                                    <Image
                                        className='w-full h-full object-cover'
                                        src={img}
                                        alt={name}
                                        priority
                                    />
                                </div>
                                <div className="text-[14px] text-center grid grid-cols-1 gap-2 mt-3">
                                    <p className='text-[20px] font-semibold text-primary'>{name}</p>
                                    <p className='text-[14px] text-custom' >{desc} </p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default TopOrder