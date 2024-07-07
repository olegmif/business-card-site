import Image from 'next/image'
import styles from './styles.module.css'
import Button from "@/common/ui/button/button";

const AboutMe = () => {
    return (
        <section className={styles.section}>
            <div className={styles.photo}>
                <Image className={styles.img} src="./images/me.png" alt="My photo" layout={"fill"} objectFit={"cover"} />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p className={styles.subtitle}>Frontend Developer</p>
                    <h1 className={styles.header}>Oleg Miftakhov</h1>
                </div>
                <p className={styles.text}>Suspendisse hendrerit rhoncus augue vel rhoncus. Maecenas aliquet tincidunt
                    hendrerit. Sed et augue non elit euismod feugiat. Nunc ut pellentesque mauris. Cras sed tincidunt
                    eros, a ornare mauris. Aliquam erat volutpat. Pellentesque vitae arcu quis neque tristique interdum
                    quis at purus.</p>
                <p className={styles.text}>Nullam viverra consequat tortor id rhoncus. Nunc eget nulla leo. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce viverra, ipsum quis
                    viverra vulputate, nulla tellus congue orci, sed pulvinar lacus lacus sit amet metus. </p>
                <div className={styles.actions}>
                    <Button>Резюме</Button>
                    <Button>Контакты</Button>
                </div>
            </div>
        </section>
    )
}

export default AboutMe