import { motion } from "framer-motion";

const achievements = [
  // {
  //   title: "Web Development Internship",
  //   description:
  //     "Completed internship at NeuroNexus Innovations, worked on full-stack web development using React and Node.js.",
  //   certificate:
  //     "https://drive.google.com/file/d/1peJOzHqbgzbRNRQicpbUchx5f71OQw3I/view",
  // },
  {
    title: "SQL Advanced",
    description:
      "Certified in SQL in advance level by Hackerrank",
    certificate:
      "https://www.hackerrank.com/certificates/267ca1da3d85",
  },
  {
    title: "Python",
    description:
      "Certified in SQL in Basic level by Hackerrank",
    certificate: "https://www.hackerrank.com/certificates/e3f45ee7e3ea",
  },

];

const fadeFrom = (direction = "left", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -150 : 150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      type: "spring",
      duration: 0.6,
    },
  },
});

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-16 px-4 sm:px-8 md:px-16 min-h-screen"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-600 mb-12">
        Achievements
      </h2>
      <div className="space-y-6 flex flex-col items-center">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeFrom(index % 2 === 0 ? "left" : "right", index * 0.2)}
            className="relative w-2/3 mx-auto border border-gray-300 rounded-xl p-6 shadow-md"
          >
            {ach.certificate && (
              <a
                href={ach.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-4 text-sm text-blue-600 hover:underline"
              >
                View Certificate
              </a>
            )}
             {ach.view && (
              <a
                href={ach.view}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-4 text-sm text-blue-600 hover:underline"
              >
                View On Platform
              </a>
            )}
            <h3 className="text-xl font-semibold mb-1">{ach.title}</h3>
            <p className="text-sm text-gray-700">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
