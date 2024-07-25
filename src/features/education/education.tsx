import {FC} from "react";
import Section from "@shared/ui/section/section";
import TimelineItem from "@shared/ui/timeline-item/timeline-item";
import {EDUCATION_STAGES_DATA} from "@features/education/education.mock";


const Education: FC = () => {
    const educationStages = EDUCATION_STAGES_DATA;
    return (
        <Section title={"Education"}>
            {educationStages.map(item => <TimelineItem key={item.id} {...item} />)}
        </Section>
    )
}

export default Education;