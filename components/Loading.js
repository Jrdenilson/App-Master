import styles from "../styles/Loading.module.css"

export default function Loading() {
    return (
      <div className={styles.centralize}>
        <h1>Carregando......</h1>
        <img src="https://i.imgur.com/AqFk9Ux.gif" srcSet="https://i.imgur.com/AqFk9Ux.gif"></img>
      </div>
    );
  }