import React from 'react';
import CustomButton from '../CustomComponents/CustomButton';
import * as motion from "motion/react-client";

// landing page component for about
function About() {
    return (
        <section className="w-full flex justify-center px-4 sm:px-6 mb-10 mt-10">
            <motion.div
                className="w-full max-w-[1500px] text-center flex flex-col justify-center items-center py-10 bg-primary rounded-md gap-8"
                whileHover={{ scale: 1.02 }}
            >

                <div className="flex flex-col items-center gap-2 text-xl sm:text-2xl font-semibold text-accent">
                    <h2>About BrewHez</h2>
                    <div className="bg-accent h-[5px] w-[80px] rounded"></div>
                </div>

                <div className="px-4 sm:px-10 flex flex-col gap-4 text-base text-accent max-w-4xl text-justify">
                    <article>
                        BrewHez was born from a simple love for quality coffee and good company. Our journey started in a cozy corner of the city where friends and strangers alike could gather over a perfect cup. Since then, we have grown into a community-focused café dedicated to serving freshly brewed coffee, delicious pastries, and a welcoming atmosphere that feels like home.
                    </article>
                    <article>
                        We believe in sourcing our beans responsibly and working closely with local roasters to ensure every cup of coffee you enjoy is crafted with care. Whether you are here for a quick espresso on the go, a quiet space to work, or a long chat with friends, BrewHez is your neighborhood haven for all things coffee. Come for the coffee, stay for the warmth.
                    </article>
                </div>

                <div>
                    <CustomButton
                        title="Read more"
                        handleClick={() => { }}
                        className="!bg-transparent !text-accent !border-[2px] !border-accent w-full sm:w-[300px] !h-[50px]"
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default About;
