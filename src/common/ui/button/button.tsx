import {FC} from "react";
import styles from "./styles.module.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({className, children, ...rest}) => {
    return <button className={`${styles.button} ${className}`} {...rest}>{children}</button>
}

export default Button