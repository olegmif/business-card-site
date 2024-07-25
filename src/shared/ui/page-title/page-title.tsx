import React, {FC} from "react";
import Title from "@shared/ui/title/title";
import Text from "@shared/ui/text/text";

export interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle: FC<PageTitleProps> = ({title, subtitle}) => {
    return (
        <div>
        <Title tag={"h2"}>{title}</Title>
        <Text>{subtitle}</Text>
    </div>
    )
}

export default PageTitle;
