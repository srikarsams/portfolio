import Link from "next/link";
import { ReactNode } from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
  path: string;
}

export default function Button({ children, path }: ButtonProps) {
  return (
    <Link href={path}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
}
