import styles from "/styles/Footer.module.css"

import Image from "next/image"
import Link from "next/link";




export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <p><span>App Master</span> &copy; 2023</p>
                <ul className={styles.social}>
                    <li><Link href="/" target="_blank"></Link></li>
                    <li><Link href="/" target="_blank"></Link></li>    
                    <li><Link href="/" target="_blank"></Link></li>
                </ul>
        </footer>
        </>
        
    )
}