import styles from "@/styles/Home.module.css";
import { useState, createContext, SetStateAction, Dispatch } from "react";
import SubscribeCard from "./components/SubscribeCard";
import ThanksCard from "./components/ThanksCard";

interface userInter {
  email: String;
}

interface UserContextInter {
  user: userInter;
  setUser: Dispatch<SetStateAction<userInter>>;
}

export const UserContext = createContext<UserContextInter>({});

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
