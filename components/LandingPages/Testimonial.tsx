'use client'

import React from 'react'
import { FaUser } from 'react-icons/fa'
import { customersTestimonial } from '../Data/SampleData'
import * as motion from "motion/react-client"

{/* a seperate component for the landing page */ }

function Testimonial() {
    return (
        <section className="mt-10">
            <div className="flex flex-col items-center gap-2 text-[24px] font-semibold text-primary mb-8">
                <h2>What our customers says</h2>
                <div className="bg-custom h-[5px] w-[70px] rounded"></div>
            </div>
            <div className=" flex justify-center">
                <div className="grid grid-cols-3 gap-10 items-center">
                    {
                        customersTestimonial.map(({ name, comment }, index) => (
                            <motion.div
                                key={index}
                                className="w-[400px] h-[300px] flex flex-col items-center justify-center bg-secondary text-center px-4 rounded-lg text-primary gap-5 cursor-pointer shadow-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <div className=""
                                >
                                    <span><FaUser size={30} color='#1D2D3C' /></span>
                                </div>
                                <div className="">
                                    <p className=' text-[16px]' >{comment}</p>
                                </div>
                                <p className='font-bold text-[20px]'> {name} </p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonial