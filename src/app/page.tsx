import Image from "next/image";
import { roboto } from "@shared/fonts"
import styles from "./page.module.css";
import AboutMe from "@features/about-me/about-me";
import WhatIDo from "@features/what-i-do/what-i-do";

export default function Home() {
  return (
    <main className={`${styles.main} ${roboto.className}`}>
        <AboutMe />
        <WhatIDo />
    </main>
  );
}
