import styles from "./ContactSection.module.css";
import { Mail, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className={`${styles.contact} relative`}>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Section Heading */}

        <div className="max-w-4xl mb-16">

          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Start a
            <span className={styles.gradientText}> Conversation </span>
          </h2>

          <p className="mt-4 text-textMuted text-lg">
            Have an idea, opportunity, or collaboration in mind?
            Reach out and let’s explore how we can build something meaningful.
          </p>

        </div>

        {/* Contact Panel */}

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <div className={styles.infoCard}>

            <h3 className="text-2xl font-semibold">
              Connect with ArchInxT
            </h3>

            <p className="mt-4 text-textMuted leading-relaxed">
              ArchInxT is always open to discussions around technology,
              design, innovation, and collaborative ideas.
            </p>

            {/* Contact Items */}

            <div className="mt-8 space-y-5">

              <div className={styles.contactItem}>
                <Mail size={20} />
                <span>architpatle06@gmail.com</span>
              </div>

              <div className={styles.contactItem}>
                <Linkedin size={20} />
                <span>@archit-patle</span>
              </div>

              <div className={styles.contactItem}>
                <Instagram size={20} />
                <span>@tech.archinxt</span>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <form className={styles.form}>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Your Name"
                className={styles.input}
              />

              <input
                type="email"
                placeholder="Your Email"
                className={styles.input}
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className={`${styles.input} mt-4`}
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className={`${styles.input} mt-4`}
            ></textarea>

            <button className={styles.button}>
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;