"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import styles from "./search.module.css";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const toastConfig = {
  hideProgressBar: true,
  autoClose: 2000,
  type: "warning",
};

export default function SearchLayout({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let search = searchParams.get("search");

  const submitForm = (e) => {
    e.preventDefault();
    const trimmed = e.target.search.value.trim();
    if (!trimmed) {
      toast("Enter some word to search", toastConfig);
      return;
    }
    if (search === trimmed.split(" ").join("+")) {
      toast("Enter new search please", toastConfig);
      return;
    }
    search = trimmed.split(" ").join("+");
    router.push(`/search?search=${search}`);
    e.target.reset();
  };

  return (
    <>
      <header className={styles.header}>
        <form onSubmit={submitForm} className={styles.form}>
          <button type="submit" className={styles.button}>
            <BsSearch style={{ width: "28px", height: "28px" }}></BsSearch>
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
      <ToastContainer />
    </>
  );
}
