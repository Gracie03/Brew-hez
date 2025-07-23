'use client'

import Image from "next/image";
import CustomButton from "./CustomButton";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { StaticImageData } from 'next/image';

interface CardProps {
    className?: string;
    name: string;
    cost: number | string;
    desc: string;
    img: string | StaticImageData;
    func: () => void;
}

const CustomCard = ({ name, cost, desc, img, func }: CardProps) => {
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center shadow-lg md:gap-0 p-5 rounded-md bg-white">

                <div className="w-full md:w-[500px] h-[250px] md:h-[400px] overflow-hidden rounded-md">
                    <Image
                        src={img}
                        alt={name}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                <div className="w-full flex flex-col gap-4 bg-secondary px-5 py-6 md:py-10 rounded-md md:rounded-r-md md:rounded-l-none mt-5 md:mt-0">
                    <p className="text-[20px] md:text-[24px] font-semibold text-primary">{name}</p>
                    <article className="text-[14px] md:text-[16px] font-semibold text-custom">
                        {desc}
                    </article>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-[18px] md:text-[20px] font-semibold text-primary">{cost}</p>
                        <CustomButton
                            title="Order coffee"
                            handleClick={func}
                            className="w-full sm:w-[200px] h-[45px] sm:h-[50px]"
                            Icon={<BiSolidCoffeeTogo size={22} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
