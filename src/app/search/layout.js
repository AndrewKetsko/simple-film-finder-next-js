"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import styles from "./search.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchLayout({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let search = searchParams.get("search");

  const submitForm = (e) => {
    e.preventDefault();
    if (!e.target.search.value.trim()) {
      // toast("Enter some word to search");
      return;
    }
    if (search === e.target.search.value.trim().split(" ").join("+")) {
      // toast("Enter new search please");
      return;
    }
    search = e.target.search.value.trim().split(" ").join("+");
    router.push(`/search?search=${search}`);
    e.target.reset();
  };

  return (
    <>
      <header className={styles.header}>
        <form onSubmit={submitForm} className={styles.form}>
          <button type="submit" className={styles.button}>
            <BsSearch style={{width:'28px', height:'28px'}}></BsSearch>
            <span className={styles.label}>Search</span>
          </button>

          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            className={styles.input}
          />
        </form>
      </header>
      {children}
    </>
  );
}
