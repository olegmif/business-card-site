import {FC, HTMLAttributes, HTMLProps} from "react";

//HTMLElementTagNameMap

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    tag: HeadingTags;
}

const Title: FC<TitleProps> = ({tag: Tag, children}) => {
    return <Tag>{children}</Tag>
}

export default Title;