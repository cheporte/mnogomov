import React from 'react';
import './CustomButton.sass';
import classNames from 'classnames';

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    type?: "button" | "submit";
    onclick?: () => void;
    className?: string;
};

const CustomButton: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    type = "button",
    onclick,
    className
}) => {
    const btnClass = classNames(
            'button',
            variant,
            size,
            className
        );

    return (
        <button className={btnClass} type={type} onClick={onclick}>
            {children}
        </button>
    );
}

export default CustomButton;