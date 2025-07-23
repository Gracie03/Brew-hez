'use client';

import React from 'react';
import CustomButton from '../CustomComponents/CustomButton';
import Pic from '@/image/hero.png';
import Image from 'next/image';
import { BiSolidCoffeeTogo } from 'react-icons/bi';
import { useRouter } from 'next/navigation';


// landing page component for the hero section
function Hero() {
    const router = useRouter();

    return (
        <section className="bg-secondary">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between px-5 py-10 gap-10 md:gap-0">
                {/* Left text section */}
                <div className="grid grid-cols-1 gap-4 max-w-xl">
                    <div className="text-custom">
                        <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
                            Experience bold flavor, rich aroma, &
                        </h1>
                        <h2 className='text-3xl md:text-5xl font-bold'>
                            the perfect <span className='italic text-primary'>cup—every</span> time.
                        </h2>
                    </div>

                    <div className="text-base md:text-lg mt-2 text-custom font-semibold">
                        <p>Place your order today and satisfy the thirst,</p>
                        <p>Let us get you started on the best coffee blend that soothes your body and satisfies your cravings...</p>
                    </div>

                    <div className="mt-6">
                        <CustomButton
                            title="Order coffee"
                            handleClick={() => router.push("/product")}
                            className="w-full md:w-[300px] !h-[50px]"
                            Icon={<BiSolidCoffeeTogo size={22} />}
                        />
                    </div>
                </div>

                <div className="w-full md:w-[600px] h-[300px] md:h-[800px] overflow-hidden">
                    <Image
                        src={Pic}
                        alt='hero'
                        className='object-cover w-full h-full rounded-md'
                        width={600}
                        height={800}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
