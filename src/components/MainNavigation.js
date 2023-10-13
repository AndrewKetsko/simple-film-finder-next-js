"use client";

import Link from "next/link";
import styles from "@/app/app.module.css";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const path = usePathname();
  return (
    <nav className={styles.navigation}>
      <Link
        href="/"
        className={styles.link}
        style={path.endsWith("/") ? { color: "limegreen" } : {}}
      >
        TRENDING
      </Link>
      <Link
        href={"/search"}
        className={styles.link}
        style={path.includes("search") ? { color: "limegreen" } : {}}
      >
        SEARCH
      </Link>
    </nav>
  );
}
