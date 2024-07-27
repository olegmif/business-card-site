import {FC} from "react";
import Link from "next/link";

const Header: FC = () => {
    return <header>
        <ul>
            <li><Link href={"/"}>About me</Link></li>
            <li><Link href={"/portfolio"}>Portfolio</Link></li>
            <li><Link href={"/resume"}>Resume</Link></li>
        </ul>
    </header>
}

export default Header
