import {FC} from "react";
import Section from "@shared/ui/section/section";
import {CODING_SKILLS_DATA} from "@features/coding-skills/coding-skills.mock";
import Progress from "@shared/ui/progress/progress";

const CodingSkills: FC = () => {
    const codingSkills = CODING_SKILLS_DATA;
    return (
        <Section title={"Coding Skills"}>
            {codingSkills.map(item => <Progress key={item.id} {...item}/>)}
        </Section>
    )
}

export default CodingSkills
