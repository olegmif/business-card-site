export type TestimonialData = {
    id: number;
    message: string;
    name: string;
    link: {
        href: string;
        content: string;
    }
}

export const TESTIMONIALS_DATA: Array<TestimonialData> = [
    {
        id: 1,
        message: "Quisque ultricies ut augue quis condimentum. Quisque in sapien vitae lectus lacinia vestibulum. Vivamus finibus mattis odio vel tincidunt. ",
        name: "Cras Porttitor",
        link: {
            href: '#',
            content: 'Varius Sit Amet',
        }
    },
    {
        id: 2,
        message: "Sed dui urna, varius sit amet augue nec, hendrerit gravida dui. Etiam tempor mauris quis orci sodales, non suscipit mauris blandit. Sed neque arcu",
        name: "Duis Euismod",
        link: {
            href: '#',
            content: 'Quis Convallis',
        }
    },
    {
        id: 3,
        message: "Nam ex sem, condimentum at eleifend eu, pulvinar nec velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        name: "Vestibulum tellus",
        link: {
            href: '#',
            content: 'Vestibulum Gravida',
        }
    },
    {
        id: 4,
        message: " Praesent ac erat sit amet quam pharetra fermentum ut id nulla. Praesent dignissim a diam non placerat. Morbi efficitur nisi mauris, a elementum sem rutrum ut. In eget tempor nulla. Vivamus eu nisl ut quam convallis commodo et a tellus. In dapibus magna eget nibh rutrum porttitor.",
        name: "Morbi Tempus",
        link: {
            href: '#',
            content: 'Aenean Hendrerit ',
        }
    }
]