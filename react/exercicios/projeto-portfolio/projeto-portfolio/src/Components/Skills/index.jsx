//skill
import './index.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase, FaGit, FaGithub } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';


function Skills() {
  return (
    <>
    <div id='skills' className='sk-container'>
      <h1>Skills:</h1>
     
      <div className='icons-container'>
         <FaHtml5  title="HTML" />
         <FaCss3 title="CSS"/>
         <FaJs title="JAVASCRIPT"/>
         <FaReact title="REACT"/>
         <SiTypescript title='TYPESCRIPT'/>
         <FaNode title="NODE"/>
         <FaDatabase title="SQL"/>
         <FaGit title="GIT"/>
         <FaGithub title="GITHUB"/>
      </div>
    </div>
    </>
  );
}

export default Skills;
