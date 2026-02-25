import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";

export default function Home() {
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>好きな曲紹介</h1>;
        </div>
      </section>
      <div className={styles.newsLink}>
          <ButtonLink href="/news">一覧へ</ButtonLink>
      </div>
    </>
  );
} 