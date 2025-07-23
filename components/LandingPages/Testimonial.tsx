'use client';

import React from 'react';
import { FaUser } from 'react-icons/fa';
import { customersTestimonial } from '../Data/SampleData';
import * as motion from "motion/react-client";



// landing page component for customer reviews
function Testimonial() {
    return (
        <section className="mt-10 px-4 sm:px-6">
          
            <div className="flex flex-col items-center gap-2 text-xl sm:text-2xl font-semibold text-primary mb-8">
                <h2>What our customers say</h2>
                <div className="bg-custom h-[5px] w-[70px] rounded"></div>
            </div>

           
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {customersTestimonial.map(({ name, comment }, index) => (
                        <motion.div
                            key={index}
                            className="w-full max-w-[400px] min-h-[260px] flex flex-col items-center justify-center bg-secondary text-center px-6 py-6 rounded-lg text-primary gap-5 cursor-pointer shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span><FaUser size={30} color='#1D2D3C' /></span>
                            <p className="text-base text-custom">{comment}</p>
                            <p className="font-bold text-lg">{name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
