import Section from "@shared/ui/section/section";
import Title from "@shared/ui/title/title";
import Text from "@shared/ui/text/text";

const AboutMe = () => {
    return (
        <Section>
            <Title tag={"h2"}>Oleg Miftakhov</Title>
            <Text>
                Cras porttitor molestie massa vitae finibus. Vestibulum suscipit eget lorem eu egestas. Curabitur eu
                ante gravida, tincidunt lorem sit amet, fringilla lacus. Praesent ac erat sit amet quam pharetra
                fermentum ut id nulla. Praesent dignissim a diam non placerat. Morbi efficitur nisi mauris, a elementum
                sem rutrum ut. In eget tempor nulla. Vivamus eu nisl ut quam convallis commodo et a tellus. In dapibus
                magna eget nibh rutrum porttitor. Cras vitae justo ac neque dapibus laoreet porttitor et neque. Morbi
                tempus dolor nec dictum ullamcorper. Proin sollicitudin est quis nisl feugiat interdum. Nunc rutrum
                mattis rutrum. Fusce efficitur massa at leo posuere suscipit eu ut nisl. Aenean hendrerit lorem et
                imperdiet ullamcorper.
            </Text>
            <div>
                <button>Download CV</button>
                <button>Contact</button>
            </div>
        </Section>
    )
}

export default AboutMe;