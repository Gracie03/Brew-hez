'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    className?: string;
    title: string;
    handleClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    Icon?: React.ReactNode;
}

const CustomButton = ({
    className = '',
    title,
    type = 'button',
    handleClick,
    Icon,
    disabled = false,
}: ButtonProps) => {
    return (
        <motion.button
            className={`p-2 border-2 border-primary bg-primary text-accent rounded-md min-h-[45px] w-full sm:w-[200px] text-base sm:text-lg font-semibold hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300 ${className}`}
            onClick={handleClick}
            disabled={disabled}
            type={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="flex items-center justify-center gap-2">
                <span>{title}</span>
                {Icon && <span>{Icon}</span>}
            </div>
        </motion.button>
    );
};

export default CustomButton;
