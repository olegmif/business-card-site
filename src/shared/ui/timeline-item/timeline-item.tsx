import {FC} from "react";
import Text from "@shared/ui/text/text";

export type TimelineItemData = {
    id: number;
    start: string;
    end?: string;
    name: string;
    title: string;
    details: string;
}

export interface TimelineItemProps extends TimelineItemData {}

const TimelineItem: FC<TimelineItemProps> = ({start, end, name, title, details}) => {
    return (
        <div>
            <div>
                <Text>{start}{end && `-${end}`}</Text>
                <Text>{name}</Text>
            </div>
            <div>
                point
            </div>
            <div>
                <Text>{title}</Text>
                <Text>{details}</Text>
            </div>
        </div>
    )
}

export default TimelineItem