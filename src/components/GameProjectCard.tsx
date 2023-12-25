import { SiWindows, SiMacos } from "react-icons/si";

function GameProjectCard(props : any) {
  return (
    <div className='card flex flex-col items-center'>
      <div className='flex flex-row gap-4 items-center mb-4'>
        <p className="text-bold text-left text-2xl">
          {props.index + 1 + '. ' + props.projectTitle}
        </p>
      </div>
      <p className='mt-4'>
          {props.projectDesc}
      </p>
      <div className="flex flex-col gap-4 my-4">
        <a href={props.projectDL.windowsDL} download>
          <button className='px-4 py-4 min-w-180px border-4 rounded shadow text-xl'>
            <div className='flex items-center gap-4'>
              Download
              <SiWindows size={48} draggable={false}/>
            </div>
          </button>
        </a>
        <a href={props.projectDL.macosDL} download>
          <button className='px-4 py-4 min-w-180px border-4 rounded shadow text-xl'>
            <div className='flex items-center gap-4'>
              Download
              <SiMacos size={48} draggable={false}/>
            </div>
          </button>
        </a>
      </div>
      <p className='text-xl mt-2'>
          Credits for various resources used:
      </p>
      <ul>
        {props.projectResources.map((resource: Resource, index: number) => {
          return <li key={resource.resourceTitle + index}><a href={resource.resourceURL} target="_blank">{resource.resourceTitle}</a></li>
        })}
      </ul>
    </div>
  )
}

export default GameProjectCard