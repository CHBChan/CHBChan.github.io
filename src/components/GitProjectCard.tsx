import { FaGithub } from "react-icons/fa";

function GitProjectCard(props : any) {
  return (
    <div className='card flex flex-col'>
      <div className='flex flex-row gap-4 items-center mb-4'>
        <p className="text-bold text-2xl">
          {props.index + 1 + '. ' + props.projectTitle}
        </p>
        <a href={props.gitLink} target='_blank' className='ml-2'>
          <FaGithub size={24} className='inline'/>
        </a>
      </div>
      <img className='projectImg object-scale-down' src={props.projectImage} alt='project image' draggable={false}/>
      <p className='mt-4'>
          {props.projectDesc1}
      </p>
      <p className='mt-4'>
          {props.projectDesc2}
      </p>
    </div>
  )
}

export default GitProjectCard