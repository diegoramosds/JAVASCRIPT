import { Link } from 'react-router-dom'

import './index.css'

function Header() {
  
  function scrollToSkills() {
    const skillsElement = document.getElementById('skills'); // ID do elemento Skills
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  }
  
    return (

      <div className="header-container">
        <Link to="/skills" onClick={scrollToSkills}  className="custom-link">Skills</Link>
        <Link  className="custom-link"> Projects</Link>
        <Link  className="custom-link">Contato</Link>
      </div>
      
    );
  }
  
  export default Header;
  