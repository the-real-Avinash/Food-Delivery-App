import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "../styles/Feature.module.css";
import Carousel from "react-bootstrap/Carousel";

const Featured = () => {
  const images = [
    "/img/featured.jpg",
    "/img/featured1.jpg",
    "/img/featured2.jpg",
  ];
  return (
    <div>
      <div className={styles.container}>
        <Carousel>
          <Carousel.Item>
            <Image src="/img/featured.jpg" alt="" width="1600" height="500" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src="/img/featured1.jpg" alt="" width="1600" height="500" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src="/img/featured2.jpg" alt="" width="1600" height="500" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Featured;
