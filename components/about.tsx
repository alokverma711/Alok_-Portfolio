// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
        I am a <b className="font-medium">2nd year Full Stack Developer</b> skilled in{" "}
        <b className="font-medium">JavaScript, React.js, Node.js, Next.js, and Tailwind CSS</b>.
        I have hands-on experience building scalable applications through real-world projects and hackathons,
        including the <b className="font-medium">Smart India Hackathon</b>.
        I am continuously enhancing my technical skills through industry certifications and workshops.
        I am driven to contribute, collaborate, and grow in fast-paced development environments.
      </p>

      <p>
        <i className="italic">When I'm not coding</i>, I actively seek opportunities to collaborate on impactful projects
        and participate in hackathons. I am always eager to take on development roles that challenge and enhance my skills.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
