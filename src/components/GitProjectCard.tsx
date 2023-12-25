import { FaGithub } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function GitProjectCard(props : any) {
  return (
    <div className='card flex flex-col max-h-[500px]'>
      <div className='flex flex-row gap-4 items-center mb-4'>
        <p className="text-bold text-xl">
          {props.index + 1 + '. ' + props.projectTitle}
        </p>
        {(props.gitLink != null) &&
          <a href={props.gitLink} target='_blank' className='ml-2'>
            <FaGithub size={24} className='inline'/>
          </a>
        }
        {(props.playLink != null) &&
          <a href={props.playLink} target='_blank' className='ml-2'>
            <IoLogoGooglePlaystore size={24} className='inline'/>
          </a>
        }
      </div>
      <img className='projectImg' src={props.projectImage} alt='project image' draggable={false}/>
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