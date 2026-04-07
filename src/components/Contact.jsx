import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gveyrbg",   // 🔁 replace
        "template_je7jb4h",  // 🔁 replace
        form.current,
        "yEFqcAvbpjR9PC7Hb"    // 🔁 replace
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-12 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;