import Image from 'next/image';
import Link from 'next/link';
import styles from './Productslist.module.css';

export default function Productslist() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/products/smartphone" className={styles.link}>
              スマートフォン
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/products/pc" className={styles.link}>
              PC
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/products/headphone" className={styles.link}>
              ヘッドホン
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
