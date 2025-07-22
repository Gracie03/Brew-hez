import React, { useEffect } from 'react';

interface ModalProps {
    toggle?: () => void;
    visibility?: boolean;
    children: React.ReactNode;
    className?: string;
}

const CustomModal = ({ children, visibility = false, toggle, className }: ModalProps) => {

    useEffect(() => {
        if (visibility) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [visibility]);

    if (!visibility) return null;

    return (
        <div
            className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center ${className}`}
            onClick={toggle}
        >
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;
