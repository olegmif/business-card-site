import PageTitle from "@shared/ui/page-title/page-title";
import Tabs from "@shared/ui/tabs/tabs";

const TABS_BUTTONS_MOCK = [
    {
        value: 0,
        title: "All"
    },
    {
        value: 1,
        title: "Media"
    },
    {
        value: 2,
        title: "Mockups"
    },
    {
        value: 3,
        title: "SoundCloud"
    },
    {
        value: 4,
        title: "Vimeo Videos"
    },
    {
        value: 5,
        title: "YouTube Videos"
    },
]

const PortfolioPage = () => {
    const tabButtons = TABS_BUTTONS_MOCK;
    return (
        <main>
            <PageTitle title="Portfolio" subtitle={"My Works"}/>
            <Tabs buttons={tabButtons} />
        </main>
    )
}

export default PortfolioPage;