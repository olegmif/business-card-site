import {FC, HTMLAttributes} from "react";
import Title from "@shared/ui/title/title";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
    title?: string;
}

const Section: FC<SectionProps> = ({title, children, ...rest}) => {
    return <section {...rest}>
        {title && <Title tag={"h3"}>{title}</Title>}
        {children}
    </section>
}

export default Section;
