import {FC} from "react";
import Image from "next/image";
import styles from "./styles.module.css"

export type ServiceData = {
    title: string;
    description: string;
    icon: string;
}

export interface ServiceProps extends ServiceData {}

const Service: FC = ({title, description, icon}) => {
    return (
        <div className={styles.service}>
            <h3>{title}</h3>
            <Image className={styles.icon} src={`/images/${icon}`} alt={title} width={42} height={42} />
            <p>{description}</p>
        </div>
    )
}

export default Service