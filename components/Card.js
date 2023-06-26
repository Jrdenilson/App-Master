import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ jogos }) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          width="140"
          height="140"
          alt={jogos.title}
          src={jogos.thumbnail}
          
        />
      </div>
      <div className={styles.item_description}>
        <h5>{jogos.title}</h5>
        <Link href={`/itemsdetails/${jogos.id}`} className={styles.glow_on_hover}>Detalhes</Link>
      </div>
    </div>
  );
}
