import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./components/sidebar/sidebar";
import HomePage from "./components/home/home";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <HomePage />
    </main>
  );
}
