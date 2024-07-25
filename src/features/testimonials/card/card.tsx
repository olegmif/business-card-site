import Text from "@shared/ui/text/text";
import {FC} from "react";
import {TestimonialData} from "@features/testimonials/testimonials.mock";
import exp from "node:constants";

export interface CardProps extends TestimonialData {}

const Card: FC<TestimonialData> = ({message, name, link}) => {
    return (
        <div>
            <Text>{message}</Text>
            <div>
                <Text>{name}</Text>
                <Text>{link.content}</Text>
            </div>
        </div>
    )
}

export default Card;

