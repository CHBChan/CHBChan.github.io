import { useRef } from "react";
import { motion } from "framer-motion";

import GitProjectCard from "../components/GitProjectCard";
import GameProjectCard from "../components/GameProjectCard";
import { GitList, GameList } from "../data/projects_data";

function MyProjects() {

  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);

  return (

    <div className='pageContent'>
      <div className='projects flex flex-col items-center'>
        <p className='text-bold text-3xl'>My Projects</p>
        <motion.div
          ref={constraintsRef1} 
          className='motion-container flex cursor-grab overflow-hidden w-screen bg-slate-400'
          whileTap={{cursor: "grabbing"}}>
          <motion.div 
            drag='x'
            dragConstraints={constraintsRef1}
            className='flex gap-12'>
              {GitList.map((project, index) => 
                <motion.div key={'project' + index} className='item w-[400px]'>
                  <GitProjectCard 
                    index={index}
                    projectTitle={project.projectTitle}
                    gitLink={project.gitLink} 
                    projectImage={project.projectImage}
                    projectDesc1={project.projectDesc1}
                    projectDesc2={project.projectDesc2} />
                </motion.div>
              )}
          </motion.div>
        </motion.div>
        <p className='text-bold text-3xl my-4'>My Game Projects</p>
        <motion.div
          ref={constraintsRef2} 
          className='motion-container flex cursor-grab overflow-hidden w-screen bg-slate-400'
          whileTap={{cursor: "grabbing"}}>
          <motion.div 
            drag='x'
            dragConstraints={constraintsRef2}
            className='flex gap-12'>
              {GameList.map((project, index) => 
                <motion.div key={'game' + index} className='item w-[400px]'>
                  <GameProjectCard 
                    index={index}
                    projectTitle={project.projectTitle}
                    projectDesc={project.projectDesc}
                    projectResources={project.projectResources}
                    projectDL={project.projectDL} />
                </motion.div>
              )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default MyProjects;