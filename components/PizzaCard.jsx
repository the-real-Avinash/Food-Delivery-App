import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>FIORTI DO ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        maiores nostrum odit dolore reprehenderit, consectetur minus qui sunt
        est sit.
      </p>
    </div>
  );
};

export default PizzaCard;
