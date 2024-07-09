import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import { useRouter } from "next/router";

const Searchbar = () => {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("error");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Enter Min Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Enter Max Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Searchbar;
