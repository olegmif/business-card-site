import {ProgressProps} from "@shared/ui/progress/progress";

export type SkillData = {
    id: number;
    title: string;
    value: number;
}

export const DESIGN_SKILLS_DATA: Array<SkillData> = [
    {
        id: 1,
        title: "Web Design",
        value: 95,
    },
    {
        id: 2,
        title: "Print Design",
        value: 65,
    },
    {
        id: 3,
        title: "Logo Design",
        value: 80,
    },
    {
        id: 4,
        title: "Graphic Design",
        value: 90,
    }
]