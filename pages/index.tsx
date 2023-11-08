import styles from "@/styles/Home.module.css";
import { useState, createContext } from "react";
import SubscribeCard from "./components/SubscribeCard";
import ThanksCard from "./components/ThanksCard";

interface userInter {
  email: String;
}

export const UserContext = createContext({});

export default function Home() {
  const [user, setUser] = useState<userInter>({
    email: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <main className={styles.main}>
        {user.email === "" ? <SubscribeCard /> : <ThanksCard />}
      </main>
    </UserContext.Provider>
  );
}
