"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

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
      <header>
        <form onSubmit={submitForm}>
          <button type="submit">
            {/* <BsSearch></BsSearch> */}
            <span>Search</span>
          </button>

          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </header>
      {children}
    </>
  );
}
