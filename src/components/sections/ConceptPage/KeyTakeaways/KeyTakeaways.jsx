import styles from "./KeyTakeaways.module.css";

const KeyTakeaways = ({ points }) => {
  return (
    <div className={styles.takeaways}>

      <h3 className="text-xl font-semibold mb-4">
        Key Takeaways
      </h3>

      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className={styles.item}>
            {point}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default KeyTakeaways;