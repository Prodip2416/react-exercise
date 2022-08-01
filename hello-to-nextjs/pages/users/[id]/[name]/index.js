import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const index = () => {
  const router = useRouter();
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

      <h4>user - Id: {router.query.id}</h4>
      <h4>user - Id: {router.query.name}</h4>
    </div>
  );
};

export default index;
