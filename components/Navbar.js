import Link from "next/link";
import Image from "next/image";

import styles from "/styles/Navbar.module.css"

export default function Navbar({ games }) {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.link}>
                <div className={styles.logo}>
                
                <h1 className={styles.home}>App Master</h1>
            </div>
            </Link>
            
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contato
                    </Link>
                </li>
                
            </ul>
        </nav>
    )
}