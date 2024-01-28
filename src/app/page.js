import Headbar from "@/components/Headbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Headbar />
      <p>Hello from Bekto</p>
      <p>Hello from working season 2</p>
    </main>
  );
}
