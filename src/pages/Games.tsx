import { useNavigate } from 'react-router-dom'

function Games() {

  const navigate = useNavigate();
  
  return (

    <div className='pageContent flex flex-col items-center'>
        <p className='text-2xl'>
          Good job, you found a hidden page! <br/>
          You can check out some of my student game projects 
          <span className='text-2xl text-blue-700 hover:cursor-pointer ml-1' onClick={() => { navigate('/gameProjects'); }}>
            here
          </span>
        </p>
    </div>
  )
}

export default Games