import { ReactComponent as Portrait } from '../assets/portrait.svg';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiPython, DiJava, DiDatabase, DiGit  } from "react-icons/di";
import { SiCplusplus, SiCsharp, SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";

function Home() {
    return (

        <div className='pageContent flex flex-col justify-center gap-16 mx-8'>
            <div className='introduction text-center'>
                <p className='font-bold text-5xl mb-4'>Introduction</p>
                <div className='introduction flex'>
                    <Portrait className='max-h-64 basis-1/4'/>
                    <div className='flex flex-col basis-1/2'>
                        <p className='text-2xl mb-4'>
                            Hello, welcome to my website!<br/>
                            My name is Ching Hang Benny Chan.<br/>
                            It's quite a mouthful, so I usually go by Benny.
                        </p>
                        <p className='text-2xl'>
                            I like creating things. <br/>
                            In case it isn't obvious, I'm not proficient in graphic design.
                        </p>
                        <Link to={'/resume'}>
                            <button className='mt-8 px-4 py-4 border rounded shadow text-2xl'>
                                Check out my resume
                            </button>
                        </Link>
                    </div>
                    <span className='basis-1/4'></span>
                </div>
            </div>
            <div className='skills'>
                <p className='font-bold text-5xl text-center my-4'>SKILLS & TECHNOLOGIES</p>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4'>
                    {[
                        [DiHtml5, 'HTML5'],
                        [DiCss3, 'CSS3'],
                        [DiJavascript, 'Javascript'],
                        [SiTypescript, 'Typescript'],
                        [DiReact, 'React'],
                        [DiPython, 'Python'],
                        [DiJava, 'Java'],
                        [SiCplusplus, 'C++'],
                        [SiCsharp, 'C#'],
                        [DiDatabase, 'SQL'],
                        [DiGit, 'Git'],
                    ].map(([Icon, label]) => (
                        <div className='flex flex-col justify-center items-center border-2 border-solid border-black rounded-xl aspect-square'>
                            <Icon size={70}/>
                            <p className='text-xl'>{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;