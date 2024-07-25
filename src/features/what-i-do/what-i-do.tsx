import Title from "@shared/ui/title/title";
import Section from "@shared/ui/section/section";
import {WHAT_I_DO_ITEMS} from "@features/what-i-do/what-i-do.mock";
import Card from "@features/what-i-do/card/card";

const WhatIDo = () => {
    const cards = WHAT_I_DO_ITEMS;
    return (
        <Section title={"What I Do"}>
            {cards.map(item => <Card key={item.id} {...item} />)}
        </Section>
    )
}

export default WhatIDo;