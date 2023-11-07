import styles from "@/styles/Home.module.css";
import { useState } from "react";
import SubscribeCard from "./components/SubscribeCard";
import ThanksCard from "./components/ThanksCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <SubscribeCard />
    </main>
  );
}
