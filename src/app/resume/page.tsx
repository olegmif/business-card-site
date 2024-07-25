import Education from "@features/education/education";
import Expirience from "@features/expirience/expirience";
import DesignSkills from "@features/design-skills/design-skills";
import CodingSkills from "@features/coding-skills/coding-skills";
import PageTitle from "@shared/ui/page-title/page-title";

const ResumePage = () => {
    return (
        <main>
            <PageTitle title={"Resume"} subtitle={"12 Years of Experience"}/>
            <Education />
            <DesignSkills />
            <Expirience />
            <CodingSkills />
        </main>
    )
}

export default ResumePage