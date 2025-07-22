import Image from 'next/image'
import React from 'react'
import { sampleBlog } from '../Data/SampleData'
import * as motion from "motion/react-client"


{/* a seperate component for the landing page */ }

function Blog() {
    return (
        <section className="mb-10 mt-10">
            <div className="">
                <div className="flex flex-col items-center gap-2 text-[24px] font-semibold text-primary mb-8">
                    <h2>Our blog</h2>
                    <div className="bg-custom h-[5px] w-[70px] rounded"></div>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        sampleBlog.map(({ img, title, desc }, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center bg-primary rounded-l-lg cursor-pointer"
                                initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
                                whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
                                whileHover={{ x: 40 }}
                            >
                                <div className="-w-[300px] h-[300px] rounded-l-lg overflow-hidden">
                                    <Image
                                        src={img}
                                        alt='blog'
                                        className='w-full h-full object-cover'
                                        priority
                                    />
                                </div>
                                <div className=" text-accent py-10 px-4 w-[1200px] grid grid-cols-1 gap-2">
                                    <p className='font-semibold text-[20px]'>{title}</p>
                                    <article className=' text-[16px]'>
                                        {desc}
                                    </article>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog