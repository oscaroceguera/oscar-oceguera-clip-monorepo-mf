import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { lazy } from "react";
import styles from "@/styles/Home.module.css";

let RemotePage = () => null;
if (process.browser) {
  //useCustomHook = require('shop/customHook').default;
  RemotePage = lazy(() => {
    return import("secondApp/secondApp");
  });
}

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div style={{ border: "1px solid red", height: "90vh" }}>
      <h1 style={{ textAlign: "center", margin: "28px" }}>
        Esta app va a transformarce en un contenedor Microfront!
      </h1>
      <RemotePage />
    </div>
  );
}

export default Home;
