import Head from "next/head";
import Script from "next/script";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Dummy from "../component/dummy";
// but in case if we want to add css to the index js then we should write in this way <name.module.css>

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // console.log(styles);
  return (
    <>

    {/* it is called style jsx where we can give style in terms of javascript object */}
    {/* <style jsx>
      {`
       .mySpan{
       color: red
       }
      `}
    </style> */}



      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
        {/* <script src="/sc.js"></script> */}
      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></Script>
      
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.title} style={{ position: "relative", top: "150px" }}>
          <h1 className={styles.h1} style={{position: "relative",bottom: "130px"}}>&lt;A Hunting Coder App/&gt;</h1>
          <p className={styles.p} style={{ marginTop: "20px", textAlign: "center",position: "relative",bottom: "130px" }}>A blog for hunting coder</p>
        </div>

        {/* for static site generation we can use image instead we can use img tag */}
        {/* <Image className={`${styles.myImg}`} src="/hunting coder.jpg" height={250} width={400}/> */}


        <img src="/hunting coder.jpg" className={`${styles.myImg}`} width={250} height={250}  alt="" />

        {/* <div className={`${styles.blogs} ${styles2.con}`}> to add multiple css */ }
        <div className={`${styles.blogs}`}>
          <h2 className={styles.h2}>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p className={`${styles.para}`}>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p className={`${styles.para}`}>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p className={`${styles.para}`}>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p className={`${styles.para}`}>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p className={`${styles.para}`}>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>
    </>
  );
}
