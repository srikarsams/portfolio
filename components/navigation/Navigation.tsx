import Link from "next/link";

import styles from "./navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <a className={styles.logo}>Srikar Samudrala</a>
      </Link>
      <ul className={styles.menu}>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="https://www.twitter.com/sreekars_">
            <a>Twitter</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.github.com/srikarsams">
            <a>Github</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
