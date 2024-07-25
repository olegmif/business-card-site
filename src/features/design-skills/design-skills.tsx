import Section from "@shared/ui/section/section";
import {FC} from "react";
import {DESIGN_SKILLS_DATA} from "@features/design-skills/design-skills.mock";
import Progress from "@shared/ui/progress/progress";

const DesignSkills: FC = () => {
    const designSkills = DESIGN_SKILLS_DATA
    return (
        <Section title={"Design Skills"}>
            {designSkills.map(item => <Progress key={item.id} {...item}/>)}
        </Section>
    )
}

export default DesignSkills;
