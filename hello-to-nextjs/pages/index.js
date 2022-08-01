import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="/"> Home</Link>
      <Link href="/users"> Users</Link>
      <Link href="/services"> Services</Link>
      <h4>Home Page</h4>
    </div>
  );
}
