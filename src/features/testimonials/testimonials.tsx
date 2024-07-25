import Section from "@shared/ui/section/section";
import {TESTIMONIALS_DATA} from "@features/testimonials/testimonials.mock";
import Card from "@features/testimonials/card/card";

const Testimonials = () => {
    const testimonials = TESTIMONIALS_DATA;
    return (
        <Section title={"Testimonials"}>
            {testimonials.map(item => <Card key={item.id} {...item}/>)}
        </Section>
    )
}

export default Testimonials;