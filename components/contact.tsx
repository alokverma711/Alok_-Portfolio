// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Define the Contact component.
const Contact = () => {
  // Use the useSectionInView custom hook to track when the "Contact" section is in view.
  const { ref } = useSectionInView("Contact");

  // Return the Contact section with animations.
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My contact</SectionHeading>

      <div className="text-gray-700 -mt-6 dark:text-white/80 flex flex-col items-center gap-2">
        <p>
          <b>LinkedIn :</b>{" "}
          <a
            href="https://www.linkedin.com/in/alok-verma-5253b3330"
            target="_blank"
            className="underline"
          >
            www.linkedin.com/in/alok-verma-5253b3330
          </a>
        </p>
        <p>
          <b>Github :</b>{" "}
          <a
            href="https://github.com/alokverma711"
            target="_blank"
            className="underline"
          >
            https://github.com/alokverma711
          </a>
        </p>
        <p>
          <b>E-mail :</b>{" "}
          <a href="mailto:alokverma072005@gmail.com" className="underline">
            alokverma072005@gmail.com
          </a>
        </p>
        <p>
          <b>phone no. :</b>{" "}
          <a href="tel:+918252012227" className="underline">
            +91 8252012227
          </a>
        </p>
      </div>
    </motion.section>
  );
};

// Export the Contact component.
export default Contact;
