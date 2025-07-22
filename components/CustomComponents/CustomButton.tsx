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
            className={`${className} p-2 border-2 border-primary bg-primary text-accent rounded-md w-[200px] hover:bg-transparent hover:text-primary hover:border-primary h-[45px] text-[18px] font-semibold`}
            onClick={handleClick}
            disabled={disabled}
            type={type}
            whileHover={{ scale: 1.1 }}
        >
            <div className="flex items-center justify-center gap-3">
                <span>{title}</span>
                {Icon && <span>{Icon}</span>}
            </div>
        </motion.button>
    );
};

export default CustomButton;
