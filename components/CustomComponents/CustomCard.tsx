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
        <div className="">
            <div className="flex items-center shadow-lg px-5 ">
                <div className="h-[400px] w-[350px] overflow-hidden rounded-t">
                    <Image
                        src={img}
                        alt="name"
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 h-[100%] bg-secondary px-5 py-10 rounded-r-md">
                    <p className="text-[24px] font-semibold text-primary">{name}</p>
                    <article className="w-[1000px] text-[16px] font-semibold text-custom">
                        {desc}
                    </article>
                    <div className="flex items-center justify-between ">
                        <p className="text-[20px] font-semibold text-primary">{cost}</p>
                        <div className="">
                            <CustomButton
                                title="Order coffee"
                                handleClick={func}
                                className=" w-[200px] !h-[50px]"
                                Icon={<BiSolidCoffeeTogo size={22} />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default CustomCard;