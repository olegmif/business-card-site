import Nav from "@features/sidebar/nav/nav"
import { roboto } from '@shared/fonts'
import styles from "./styles.module.css"

const Sidebar = () => {
    return (
        <aside className={`${styles.sidebar} ${roboto.className}`}>
            <Nav/>
        </aside>
    )
}

export default Sidebar