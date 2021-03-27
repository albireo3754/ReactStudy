import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  // const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <label>
          username{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <p>{username} 깃허브 검색하기</p>
        <Link href={`/users/${username}`}>
          <a>검색하기</a>
        </Link>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          go to <Link href="/tomato">Tomato!</Link>
          go to <Link href="/vegetable/[name]">동적 감자!</Link>
          <button type="button" onClick={() => router.push("/tomato")}>
            토마토로가기
          </button>
          <div>
            이미지실험<img src="/123.png"></img>
          </div>
        </h1> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
