import { lazy, useState } from "react";
import styles from "../styles/Principal.module.css";
import Card from "./Card";
import Search from "./Search";

export default function Principal(jogos) {
  const [search, setSearch] = useState("");
  let pesquisas = [];

  let games = jogos.jogos;
  games !== 'null' ? pesquisas = games.filter((pesquisa) => pesquisa.title.includes(search)) : null
  var generos = [];
  for (let i = 0; i < pesquisas.length; i++) {
    generos.push(pesquisas[i].genre);
  }
  const uniqueArray = generos.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return (
    <div className={styles.item_container}>
      <div className={styles.generos}>
        {search !== "" ? <Search generos={uniqueArray} jogos={games} /> : null}
      </div>
      <div className={styles.input}>
       { games !== "null" ? <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite sua busca"
        ></input> : null}
      </div>

      <div className={styles.cards}>
        {games != "null" ? (
          pesquisas.map((jogo) => <Card key={jogo.id} jogos={jogo} />)
        ) : (
          <div className={styles.error_container}>
            <h1 className={styles.error}>
              OPS, que pena! O servidor fahou em responder, tente recarregar a
              página!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
