import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}

        <div className={styles.top}>

          {/* Brand */}

          <div className={styles.brand}>

            <h3 className={styles.logo}>
              Arch<span>InxT</span>
            </h3>

            <p className="mt-4 text-textMuted text-sm max-w-sm">
              Architecture Of Innovation & Technology. <br />
              Exploring modern tech concepts, frontend design
              and system thinking.
            </p>

          </div>

          {/* Navigation */}

          <div className={styles.links}>

            <div>
              <h4>Explore</h4>
              <ul>
                <li>Concepts</li>
                <li>Designs</li>
                <li>Insights</li>
              </ul>
            </div>

            <div>
              <h4>Platform</h4>
              <ul>
                <li>About</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4>Connect</h4>
              <ul>
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Email</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider */}

        <div className={styles.divider}></div>

        {/* Bottom */}

        <div className={styles.bottom}>

          <p className="text-sm text-textMuted">
            © {new Date().getFullYear()} ArchInxT. All rights reserved.
          </p>

          <div className={styles.socials}>
            <span>LinkedIn</span>
            <span>GitHub</span>
            <span>Twitter</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;