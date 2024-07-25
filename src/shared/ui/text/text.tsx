import {FC, HTMLAttributes} from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

const Text: FC<TextProps> = ({children, ...rest}) => {
    return (
        <p {...rest}>{children}</p>
    )
}

export default Text;