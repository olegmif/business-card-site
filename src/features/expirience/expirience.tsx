import Section from "@shared/ui/section/section";
import {FC} from "react";
import {EXPIRIENCE_STAGES_DATA} from "@features/expirience/expirience.mock";
import TimelineItem from "@shared/ui/timeline-item/timeline-item";

const Expirience: FC = () => {
    const expirienceStages = EXPIRIENCE_STAGES_DATA;
    return (
        <Section title={"Expirience"}>
            {expirienceStages.map(item => <TimelineItem key={item.id} {...item} />)}
        </Section>
    )
}

export default Expirience;