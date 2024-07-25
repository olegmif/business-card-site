import {FC} from "react";
import Text from "@shared/ui/text/text";


export interface ProgressProps {
    title: string;
    value: number;
}

const Progress: FC<ProgressProps> = ({title, value}) => {
    return (
        <div>
            <div>
                <Text>{title}</Text>
                <Text>{value}%</Text>
            </div>
            <div>{value}</div>
        </div>
    )
}

export default Progress;
