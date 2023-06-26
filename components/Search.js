import Link from "next/link";

import styles from "../styles/Search.module.css"

export default function Search( generos ) {
    console.log(generos.jogos[0]);
    const generosPesquisa = generos.generos;
    return (
        <div className={styles.categories_bar}>
            <p>Generos</p>
            <ul className={styles.link_categories}>
                {generosPesquisa.map((genero) => <li>
                    <Link href={`/generos/${genero}`}>
                        {genero}
                    </Link>
                </li>
                )}
                
               
            </ul>
        </div>
    )
}