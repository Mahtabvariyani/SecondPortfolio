import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import mail from "../heroAnim/mail.json";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Lottie from "lottie-react";
import { qrcode } from "../assets";
import { MVR } from "../assets";
import { toast } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.promise(
      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mah",
          from_email: form.email,
          to_email: "mahtabvariyani@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: "Sending Mail wait...",
        success: () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          return "Email Sent";
        },
        error: (error) => {
          setLoading(false);
          console.error(error);
          return "Failed";
        },
      }
    );
  };

  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch </p>
        <div className="flex flex-cols">
          <h3 className={styles.sectionHeadText}>Contact. </h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-9 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="flex flex-rows">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mr-10"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </motion.div>

      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mt-9">
        <Lottie animationData={mail} loop={true} />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
