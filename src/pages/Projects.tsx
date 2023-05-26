import React from 'react'
import vigilantes from '../assets/vigilantes.png';
import confessional from '../assets/confessional.png';
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (

    <div className='pageContent'>
      <div className='projects flex flex-col items-center'>
        <p className="text-bold text-5xl">My Projects</p>
        <div className='project flex flex-col max-w-sm'>
          <p className="text-bold text-2xl mt-8">
            Vigilantes
            <a href='https://github.com/wassinkl/Vigilantes' target='_blank' className='ml-2'>
              <FaGithub className='inline'/>
            </a>
          </p>
          <img src={vigilantes} alt='Vigilantes image'/>
          <p className='mt-4'>
            This project was completed for my mobile development course in university with six other members.
            Vigilantes was coded in Kotlin for Android and targeted towards law enforcement officers
            to help them record automotive incidents through the usage of machine learning.
          </p>
          <p className='mt-4'>
            My role in this project was the lead frontend developer.
            I worked on the data structures necessary for the project to succeed,
            in addition to contributing to the design of the application's UI.
            Beyond that, I also collaborated with other members to ensure that the backend connected to the frontend.
          </p>
        </div>
        <div className='project flex flex-col max-w-sm'>
          <p className="text-bold text-2xl mt-8">
            Confessional
            <a href='https://github.com/CHBChan/confessional-client' target='_blank' className='ml-2'>
              <FaGithub className='inline'/>
            </a>
          </p>
          <img src={confessional} alt='Confessional webpage image'/>
          <p className='mt-4'>
            This was a personal fullstack project I completed to learn more about backend development.
            Users of this website are able to submit their own confessions to be stored in the backend.
            They are also given the option to view random confessions retrieved from the server.
          </p>
          <p className="mt-4">
            The frontend was developed using React and communicated with the server via the Axios library.
            The backend was developed using Node.js and Express. The user inputs are stored into a PostgreSQL database with the use of the Sequelize library.
          </p>
        </div>
        <div className='project flex flex-col max-w-sm'>
          <p className="text-bold text-2xl mt-8">
            Work in progress
            <a href='' target='_blank' className='ml-2'>
              <FaGithub className='inline'/>
            </a>
          </p>
          <p className='mt-4'>
            I'm currently working on another personal fullstack project.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects;