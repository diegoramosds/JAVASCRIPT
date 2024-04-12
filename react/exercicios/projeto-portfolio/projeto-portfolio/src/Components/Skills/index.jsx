
import './index.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase   } from 'react-icons/fa';


function Skills() {
  return (
    <>
    <div className='sk-container'>
      <h1>Conhecimentos:</h1>
     
      <div className='icons-container'>
         <FaHtml5  title="HTML" />
         <FaCss3 title="CSS"/>
         <FaJs title="JAVASCRIPT"/>
         <FaReact title="REACT"/>
         <FaNode title="NODE"/>
         <FaDatabase title="SQL"/>
      </div>
    </div>
    </>
  );
}

export default Skills;
