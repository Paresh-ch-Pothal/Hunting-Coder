import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
// to import global css
// import "../styles/style.css"; 

export default function App({ Component, pageProps }) {
  return(
  <> 
  <Navbar/>
  <Component {...pageProps} />
  </>
  );
}
