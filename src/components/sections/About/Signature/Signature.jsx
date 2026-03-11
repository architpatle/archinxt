import styles from "./Signature.module.css";

const Signature = () => {
  return (
    <section className={`${styles.signature} relative`}>

      <div className={styles.grid}></div>

      <div className="max-w-6xl mx-auto px-6 py-36 text-center relative z-10">

        <h2 className={styles.statement}>
          Architecture
          <br />
          of Innovation
          <br />
          & Technology
        </h2>

      </div>

    </section>
  );
};

export default Signature;