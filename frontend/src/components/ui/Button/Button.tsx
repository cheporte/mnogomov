import React from 'react';
import './Button.sass';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit';
    onclick?: () => void;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant='primary',
    size='md',
    type='button',
    onclick,
    className
}) => {
    return (
        <button
            className={`custom-button ${variant} ${size} ${className}`}
            type={type}
            onClick={onclick}
        >
            
            {children}
        </button>
    );
};

export default Button;