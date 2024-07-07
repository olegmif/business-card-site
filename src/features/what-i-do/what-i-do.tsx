import {FC} from "react";
import Service, {ServiceData} from "@features/what-i-do/service/service";
import styles from "./styles.module.css"

const SERVICES_DATA: Array<ServiceData> = [
    {
        title: 'Ecommerce',
        description:  'Vestibulum ornare nisl in orci interdum, eu gravida massa vestibulum. Duis sit amet congue leo, nec efficitur risus.',
        icon: 'ecommerce.svg'
    },
    {
        title: 'Copywriter',
        description:  'Vivamus non ultrices sem, sed condimentum velit. Ut quis leo scelerisque, posuere nisi a, auctor orci. Nunc non dolor convallis, auctor nulla eu, molestie ante. ',
        icon: 'copywriter.svg'
    },
    {
        title: 'Web Design',
        description:  'Phasellus bibendum, lacus ac viverra mattis, ex lectus pretium nisl, non placerat turpis odio et orci.',
        icon: 'web-design.svg'
    },
    {
        title: 'Management',
        description:  'Quisque sollicitudin, justo et malesuada efficitur, neque felis ultricies libero, eget porta nibh leo eu diam. In convallis sapien sit amet venenatis volutpat.',
        icon: 'management.svg'
    },
]

const WhatIDo: FC = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.header}>What I Do</h2>
            <div className={styles.services}>
                {SERVICES_DATA.map(service => <Service key={service.title} {...service} />)}
            </div>
        </section>
    )
}

export default WhatIDo