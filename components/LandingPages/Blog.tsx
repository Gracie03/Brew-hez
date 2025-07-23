import Image from 'next/image';
import React from 'react';
import { sampleBlog } from '../Data/SampleData';
import * as motion from "motion/react-client";


// landing page component for blog
function Blog() {
    return (
        <section className="mb-10 mt-10 px-4 sm:px-6">
          
            <div className="flex flex-col items-center gap-2 text-xl sm:text-2xl font-semibold text-primary mb-8">
                <h2>Our blog</h2>
                <div className="bg-custom h-[5px] w-[70px] rounded"></div>
            </div>

           
            <div className="flex flex-col gap-6">
                {sampleBlog.map(({ img, title, desc }, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row items-center bg-primary rounded-lg cursor-pointer overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.4 }}
                    >
                       
                        <div className="w-full md:w-[300px] h-[250px] md:h-[300px]">
                            <Image
                                src={img}
                                alt='blog'
                                className='w-full h-full object-cover'
                                priority
                            />
                        </div>

                       
                        <div className="text-accent py-6 px-4 md:px-6 flex-1 grid gap-2">
                            <p className="font-semibold text-lg sm:text-xl">{title}</p>
                            <article className="text-sm sm:text-base leading-relaxed">{desc}</article>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Blog;
