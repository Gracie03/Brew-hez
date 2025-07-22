'use client'

import React from 'react';
import CustomButton from '../CustomComponents/CustomButton';
import Pic from '@/image/hero.png';
import Image from 'next/image';
import { BiSolidCoffeeTogo } from 'react-icons/bi';
import { useRouter } from 'next/navigation';



{/* a seperate component for the landing page */ }

function Hero() {

    const router = useRouter();

    return (
        <>
            <section>
                <div className="flex items-center justify-between bg-secondary ">
                    <div className="pl-5 grid grid-cols-1 gap-4">
                        <div className="text-custom">
                            <h1 className='text-[58px] font-bold '>Experience  bold flavor, rich aroma, & </h1>
                            <h2 className='text-[46px] font-bold'>the perfect <span className='italic text-primary'>cup—every</span> time.</h2>
                        </div>
                        <div className="text-[16px] mt-2 text-custom font-semibold">
                            <p >Place your order today and satisfy the thirst,</p>
                            <p>Lets get you started on the best coffee blend, soots your body and satisfy your cravings...</p>
                        </div>
                        <div className="mt-6">
                            <div className="">
                                <CustomButton
                                    title="Order coffee"
                                    handleClick={() => router.push("/product")}
                                    className=" w-[300px] !h-[50px]"
                                    Icon={<BiSolidCoffeeTogo size={22} />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[800px] w-[600px] overflow-hidden ">
                        <Image
                            src={Pic}
                            alt='hero'
                            className='object-cover w-full h-full'
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero