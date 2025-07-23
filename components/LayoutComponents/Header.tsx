import React from 'react';

interface HeaderProps {
    title: string;
    intro: string;
}

// Custom header for all pages
function Header({ title, intro }: HeaderProps) {
    return (
        <div>
            <div className="flex items-center justify-center bg-custom px-2 sm:px-10 py-6 sm:py-14 text-center">
                <div className="text-accent flex flex-col items-center gap-3 max-w-3xl">
                    <p className="font-semibold text-2xl sm:text-4xl md:text-5xl leading-tight">
                        {title} <span className="text-primary font-bold">BrewHez</span>
                    </p>
                    <p className="italic text-sm sm:text-lg">{intro}</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
