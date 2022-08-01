import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const index = ({ data }) => {
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
      <h4>User List ....</h4>
      {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
    </div>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const data = await res.json();
//   return { props: { data } };
// }

export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
export default index;
