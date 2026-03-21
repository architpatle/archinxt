import styles from "./FloatingProfileBtn.module.css";
import { User } from "lucide-react";

const FloatingProfileBtn = () => {
  return (
    <a
      href="https://your-portfolio-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.button}>

        <div className={styles.icon}>
          <User size={18} />
        </div>

        <span className={styles.text}>
          About Archit
        </span>

      </div>
    </a>
  );
};

export default FloatingProfileBtn;