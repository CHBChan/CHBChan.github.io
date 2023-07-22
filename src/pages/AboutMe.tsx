import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function AboutMe() {

    const navigate = useNavigate();

    return (

        <div className='pageContent flex flex-col items-center'>
            <div className='contentWrapper max-w-sm text-center'>
                <p className='font-bold text-5xl'>More about me</p>
                <p className='text-xl mt-4'>
                    Wow, thanks for clicking that link!
                    If all you need is my contact information, you can find the information <a href='#contactInfo'>HERE</a>.
                </p>
                <p className='text-xl mt-4'>
                    Beyond coding, I frequently play games and watch esports. I also love to sing.
                </p>
                <p className='text-xl mt-4'>
                    Recently, I've been learning to write fantasy in hopes to someday complete a fantasy series.
                    I think that there are parallels between writing fiction and coding since 
                    both involve weaving characters together to create something beautiful.
                </p>
                <p id='contactInfo' className="font-bold text-xl mt-4">
                    I'm generally a private person, which is why I have the image of a stick figure in the homepage instead of my face, 
                    but if you are interested in working with me, you can contact me through these options.
                </p>
                <div className="contactLinks flex items-center justify-evenly gap-4 border-2 border-solid border-black rounded-xl p-4 mt-4">
                    <a href='https://github.com/CHBChan' target='_blank'>
                        <FaGithub size={48}/>
                    </a>
                    <a href='https://www.linkedin.com/in/ching-hang-benny-chan-9181931ba/' target='_blank'>
                        <FaLinkedin size={48}/>
                    </a>
                    <a href='mailto:four@umich.edu' className='font-bold text-2xl'>EMAIL</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe