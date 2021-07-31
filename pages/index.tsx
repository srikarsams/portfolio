import Button from "../components/button";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Hi there! I&apos;m Srikar.</h1>
      <p>
        I work as a Software Engineer at CondeNast Technology Lab, Bengaluru. I
        work on maintaining and building the Multi-tenant customer facing
        application.
      </p>
      <p>
        I work majorly on React. I&apos;ve experience in building popular OTT
        streaming platform based out of India which has around 80 Million MAU. I
        love working on improving performance and debugging sneaky bugs. I also
        have an experience in building ESLint plugins for improving DX at my
        workplace.
      </p>
      <p>
        I love binging on Netflix on weekends. Recently, I started dabbling in
        cryptocurrency.
      </p>

      <Button path="/work">Checkout my work</Button>
    </div>
  );
}
