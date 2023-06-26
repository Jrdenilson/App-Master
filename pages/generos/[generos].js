import { useRouter } from "next/router"
import { useParams, usePathname } from 'next/navigation';


import styles from "../../styles/[generos].module.css"
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Loading from "@/components/Loading";




function sliceData(data) {
    const finalData = data.slice(9);
    return finalData;
};









export default function Genero() {
    
    const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data',
      {
        method: "GET", // Método da solicitação (GET)
        headers: {
          "dev-email-address": "jrdenilson1@outlook.com",
        },
      });
      const data = await response.json();
      setData(data);
      
    } catch (error) {
      console.log('Ocorreu um erro:', error);
    }
  }

  
    
    var trechoRemovido ;
    
    let genero = usePathname();
    genero != null ?  trechoRemovido = sliceData(genero) : console.log(typeof(genero));
    
  
    console.log(trechoRemovido);
    console.log(data);
    
    
    return (
        <div className={styles.item_container}>
            <div className={styles.cards}>
        {data !== null ? data.map((jogo)=> jogo.genre ==trechoRemovido ? <Card key={jogo.id} jogos={jogo}/> : null) : <Loading />}
            </div>
        </div>
    )
}