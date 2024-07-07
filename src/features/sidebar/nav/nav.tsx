import Link from "next/link"
import styles from './styles.module.css'

export type MenuLinkData = {
    id: string;
    title: string;
    href: string;
}

const LINKS: Array<MenuLinkData> = [
    {
        id: '1',
        title: 'About Me',
        href: '#',
    },
    {
        id: '2',
        title: 'Resume',
        href: '#',
    },
    {
        id: '3',
        title: 'Portfolio',
        href: '#',
    },
    {
        id: '4',
        title: 'Blog',
        href: '#',
    },
    {
        id: '5',
        title: 'Contact',
        href: '#',
    },
    {
        id: '6',
        title: 'Extra',
        href: '#',
    },
    {
        id: '7',
        title: 'Get it now',
        href: '#',
    },
]

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {LINKS.map(item => <li key={item.id} className={styles.item}><Link className={styles.link} href={item.href}>{item.title}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Nav