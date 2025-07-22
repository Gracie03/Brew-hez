import React from 'react';

interface HeaderProps {
    title: string;
    intro: string;
}


{/* thecustom header for all the pages*/ }
function Header({ title, intro }: HeaderProps) {
    return (
        <div className="">
            <div className="flex items-center gap-20 py-5 bg-custom px-10 justify-center h-[200px]">
                <div className=" text-accent flex flex-col items-center gap-2">
                    <p className="font-semibold text-[48px]">{title} <span className='text-primary font-bold'>BrewHez</span></p>
                    <p className='italic'>{intro}</p>
                </div>
            </div>
        </div>
    )
}

export default Header