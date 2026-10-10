import { motion, px } from "framer-motion";

import { fadeIn } from "../../framerMotion/variants";

import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
const ProjectsMain = () => {
  const projects = [
    // {
    //   name: "Movie Recommendation System",
    //   year: "A Django-based movie recommendation system that suggests personalized Telugu movies using machine learning.",
    //   align: "right",
    //   image: "images/movie.webp",
    //   link: "https://movie-recommendation-system-django.onrender.com/",
    //   github:"https://github.com/Bingi-Ramesh/movie-recommendation-system-django"
    // },
    // {
    //   name: "YatraMitra",
    //   year: "A web-based bus travel booking system built with React and Django (Python).",
    //   align: "left",
    //   image: "images/bus.jpg",
    //   link: "https://bus-booking-react-frontend.onrender.com/",
    //   github:"https://github.com/Bingi-Ramesh/bus-booking-react-frontend"
    // },
    {
      name: "Retail Business Performance Analysis",
      year: " Cleaned and transformed e-commerce data using Excel and performed structured business analysis using MySQL. Performed EDA, RFM Analysis, and K-Means Clustering using Python. Built 3 interactive Power BI dashboards with KPIs, slicers, trends, DAX measures, and data relationships. ",
      align: "right",
      image: "https://media.istockphoto.com/id/2148804792/photo/two-data-analysts-working-on-data-analysis-dashboard-for-business-strategy.jpg?s=612x612&w=0&k=20&c=1laDBR58oVJ6gWmbBuv3S4VDyAYyYQ5VQK9j2FBC87c=",
      link: "https://github.com/VelagalaNaveen/Retail-Business-Performance-Analysis",
      github:"https://github.com/VelagalaNaveen/Retail-Business-Performance-Analysis"
    },
    {
      name: "Sales Performance Analysis Dashboard ",
      year: " Cleaned and transformed a retail sales dataset to generate customer, product, order, and sales KPIs. • Built Pivot Tables, Pivot Charts, and an interactive slicer-driven dashboard to visualize sales trends, customer insights, and delivery performance. ",
      align: "left",
      image: "https://thumbs.dreamstime.com/b/sales-performance-icon-analysis-essential-357525375.jpg",
      link: "https://github.com/VelagalaNaveen/Sales-Performance-Analysis-Dashboard-Excel",
      github:"https://github.com/VelagalaNaveen/Sales-Performance-Analysis-Dashboard-Excel"
    },
    {
      name: "Social Media Analytics ",
      year: "Designed and executed complex SQL queries across a 7-table relational database to analyze user engagement, trending hashtags, influencer rankings, and audience behavior. • Applied JOINs, GROUP BY, HAVING, Aggregate Functions, Subqueries, CTEs, and date functions to surface active users, top influencers, engagement trends, and country-wise performance. ",
      align: "right",
      image: "https://miro.medium.com/v2/resize:fit:1342/1*VDYr7Exhxs6uSmUrb_b9Bw.png",
      link: "https://github.com/VelagalaNaveen/Social-Media-Analytics-",
      github:"https://github.com/VelagalaNaveen/Social-Media-Analytics-"
    },
    {
      name: "Road Traffic Accident Analysis  ",
      year: "Conducted end-to-end analysis of a road traffic accident dataset to uncover trends in frequency and severity. • Applied data preprocessing, feature engineering, statistical analysis, and visualization to evaluate the impact of weather, vehicle type, and time of day, producing recommendations for accident prevention. ",
      align: "left",
      image: "https://resize.indiatvnews.com/en/resize/newbucket/355_-/2016/08/5zqpb3hek0tt-1470288486.jpg",
      link: "https://github.com/VelagalaNaveen/Road-Traffic-Accident-Analysis-",
      github:"https://github.com/VelagalaNaveen/Road-Traffic-Accident-Analysis-"
    },
  ];

  const smallProjects = [
    {
      name: "Calculator",
      link: "https://bingi-ramesh.github.io/simple-calculator/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Bingi-Ramesh"
    },
    {
      name: "Stopwatch",
      link: "https://bingi-ramesh.github.io/stop-watch/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Bingi-Ramesh"
    },
    {
      name: "Password Hiding",
      link: "https://bingi-ramesh.github.io/password-hiding-showing/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Bingi-Ramesh"
    },
    {
      name: "Password Generator",
      link: "https://bingi-ramesh.github.io/password-generator/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Bingi-Ramesh"
    },
    {
      name: "Simple E-Commerce",
      link: "https://bingi-ramesh.github.io/e-commerce/",
      technology: "HTML, CSS",
      github:"https://github.com/Bingi-Ramesh"
    },
    {
      name: "Quiz App",
      link: "https://quiz-app-mahabarat.vercel.app/",
      technology: "React, CSS",
      github:"https://github.com/Bingi-Ramesh"
    },
  ];
  const SmallProjectsSection = () => {
    return (
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-24"
      >
        <h2 className="text-4xl text-cyan mb-6 text-center">Small Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallProjects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-cyan rounded-2xl p-5 bg-darkGrey hover:bg-cyan text-white hover:text-darkGrey shadow-lg hover:shadow-cyan transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-bold">{proj.name}</h3>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                    className="text-xl hover:text-black transition-colors"
                  >
                    <BsGithub />
                  </a>
                )}
              </div>
              <p className="text-sm opacity-80">{proj.technology}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-2 inline-block underline hover:text-orange"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
  
  const ProjectsText = () => {
    return (
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Projects</h2>
        <p className="text-lg text-center">
          I have worked on a variety of projects, ranging from
          responsive websites for small businesses to full-stack applications
          and complex front-end interfaces.
        </p>
      </div>
    );
  };



  const SingleProject = ({ name, year, align, image, link, github }) => {
    return (
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
          align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-end sm:flex-col`}
      >
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
          <h2
  className={`text-xl font-thin text-white font-special text-justify sm:text-center ${
    align === "left" ? "md:text-right" : "md:text-left"
  } md:text-justify`}
>
  {year}
</h2>

          <div
            className={`flex items-center gap-4 mt-2 text-cyan hover:text-orange transition-all duration-500 sm:justify-center ${
              align === "left" ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-lg"
            >
              View <BsFillArrowUpRightCircleFill />
            </a>

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
                title="GitHub Repository"
              >
                <BsGithub />
              </a>
            )}
          </div>
        </div>

        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
          <img src={image}  alt="website image" className="w-full h-full" />
        </div>
      </motion.div>
    );
  };
  

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
     

    </div>
  );
};

export default ProjectsMain;
