import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ProjectCard from "../../Components/ProjectCard/projectCard";

// Import the projects data
import projects from "./projects";

function Projects() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"}/>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                previewLink={project.previewLink}
                githubLink={project.githubLink}
                projectName={project.projectName}
                projectDetails={project.projectDetails}
                demoImage={project.demoImage}
                skill_img={project.skill_img}
              />
            ))}
          </motion.div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Projects;
