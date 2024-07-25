import Image from "next/image";
import styles from "./page.module.css";
import Title from "@shared/ui/title/title";
import WhatIDo from "@features/what-i-do/what-i-do";
import Testimonials from "@features/testimonials/testimonials";
import Clients from "@features/clients/clients";
import AboutMe from "@features/about-me/about-me";

export default function Home() {
    return (
        <main>
            <AboutMe />
            <WhatIDo/>
            <Testimonials />
            <Clients />
        </main>
    );
}
