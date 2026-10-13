export default function ContactUs() {
  return (
    <main style={styles.container}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Contact <span style={styles.brand}>GharMitra</span>
        </h1>
        <p style={styles.subtitle}>
          We're here to help you with your home service needs 📞
        </p>
      </section>

      {/* Contact Info + Form */}
      <section style={styles.grid}>
        
        {/* Contact Details */}
        <div style={styles.infoCard}>
          <h2 style={styles.heading}>Get in Touch</h2>

          <p style={styles.text}>
            📞 <strong>Phone:</strong> +91 9786534556
          </p>

          <p style={styles.text}>
            📧 <strong>Email:</strong> support@gharmitra.com
          </p>

          <p style={styles.text}>
            📍 <strong>Location:</strong> Kolkata, India
          </p>

          <p style={styles.text}>
            Our support team is available to assist you with bookings,
            service queries, and feedback.
          </p>
        </div>

        {/* Contact Form */}
        <form style={styles.form}>
          <h2 style={styles.heading}>Send Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />

          <textarea
            placeholder="Your Message"
            style={styles.textarea}
            required
          />

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

      </section>
    </main>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    fontFamily: "Arial",
  },

  hero: {
    textAlign: "center",
    marginBottom: "40px",
  },

  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },

  brand: {
    color: "#7c3aed",
  },

  subtitle: {
    color: "#666",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "30px",
  },

  infoCard: {
    background: "#f3e8ff",
    padding: "25px",
    borderRadius: "12px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },

  heading: {
    fontSize: "22px",
    marginBottom: "10px",
  },

  text: {
    marginBottom: "10px",
    color: "#444",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minHeight: "120px",
    fontSize: "14px",
  },

  button: {
    padding: "12px",
    background: "#7c3aed",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};