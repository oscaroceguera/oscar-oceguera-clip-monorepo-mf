import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "28px" }}>
        Esta app va a transformarce en un contenedor MF Loco!
      </h1>
    </>
  );
}