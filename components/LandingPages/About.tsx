import React from 'react'
import CustomButton from '../CustomComponents/CustomButton'
import * as motion from "motion/react-client"


{/* a seperate component for the landing page */ }

function About() {
    return (
        <section className="w-full flex justify-center mb-10 mt-10">
            <motion.div
                className="w-[1500px] text-center flex flex-col justify-center items-center py-10 bg-primary rounded-md gap-8"
                whileHover={{ scale: 1.1 }}
            >
                <div className="flex flex-col items-center gap-2 text-[24px] font-semibold text-accent ">
                    <h2>About BrewHez</h2>
                    <div className="bg-accent h-[5px] w-[80px] rounded"></div>
                </div>
                <div className="px-10 flex flex-col gap-4 text-[16px] text-accent">
                    <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nam id distinctio autem sequi laborum aliquid ullam dolores explicabo, facere qui illo deleniti asperiores laboriosam modi, voluptas libero. Et, modi!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nam id distinctio autem sequi laborum aliquid ullam dolores explicabo, facere qui illo deleniti asperiores laboriosam modi, voluptas libero. Et, modi!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nam id distinctio autem sequi laborum aliquid ullam dolores explicabo, facere qui illo deleniti asperiores laboriosam modi, voluptas libero. Et, modi!
                    </article>
                    <article>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nam id distinctio autem sequi laborum aliquid ullam dolores explicabo, facere qui illo deleniti asperiores laboriosam modi, voluptas libero. Et, modi!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nam id distinctio autem sequi laborum aliquid ullam dolores explicabo, facere qui illo deleniti asperiores laboriosam modi, voluptas libero. Et, modi!
                    </article>
                </div>
                <div className="">
                    <CustomButton
                        title="Read more"
                        handleClick={() => { }}
                        className="!bg-transparent !text-accent !border-[2px] !border-accent w-[300px] !h-[50px]"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default About