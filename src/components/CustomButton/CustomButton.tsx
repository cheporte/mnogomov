import React from 'react';
import styles from './CustomButton.module.scss';
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
            styles.button,
            styles[variant],
            styles[size],
            className
        );

    return (
        <button className={btnClass} type={type} onClick={onclick}>
            {children}
        </button>
    );
}

export default CustomButton;