import Title from "@shared/ui/title/title";
import {FC} from "react";
import Text from "@shared/ui/text/text";
import {WhatIDoItemData} from "@features/what-i-do/what-i-do.mock";

export interface CardProps extends WhatIDoItemData {}

const Card: FC<CardProps> = ({title, text}) => {
    return (
        <div>
            <Title tag={"h4"}>{title}</Title>
            <Text>{text}</Text>
        </div>
    )
}

export default Card;