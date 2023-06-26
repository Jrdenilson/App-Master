import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";


import { Suspense, lazy } from "react";
import Principal from "@/components/Principal";
import Loading from "@/components/Loading";


export async function getStaticProps() {

  var res = await fetch(
    "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data",
    {
      method: "GET", // Método da solicitação (GET)
      headers: {
        "dev-email-address": "jrdenilson1@outlook.com",
      },
    }
  );


  if (res.status >= 500) {
    return {
      props: {
        games: "null",
      },
    };
  } else {
    const data = await res.json();

    return {
      props: {
        games: data || null,
      },
    };
  }
}





export default function Home(games) {
  

  var jogos = games.games;

  
  return (
    <>
      
        <Suspense fallback={<Loading />}>
          <Principal jogos={jogos} />
        </Suspense>
          
        
        
      
    </>
  );
}
