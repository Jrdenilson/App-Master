import Navbar from "./Navbar";
import Footer from "./Footer";


import Head from "next/head";
import SearchPage from "./Search";

export default function Layout({children}){
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon-32x32.png" />
            <title>App Master</title>
        </Head>
        <Navbar />
        
        <main className="main-container">{children}</main>
        
        </>
    )
}