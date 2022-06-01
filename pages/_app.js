import '../styles/globals.css'

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap//
import Head from "next/head"; // Head Tag//
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
  <>
  
  <ToastContainer position="bottom-right" pauseOnFocusLoss={false} style={{fontStyle:"italic",fontFamily:'Shadows Into Light',}} />
  <Component {...pageProps} />
  </>)
}

export default MyApp
