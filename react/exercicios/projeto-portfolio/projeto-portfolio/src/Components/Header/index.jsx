import { Link } from 'react-router-dom'

import './index.css'

function Header() {
    return (
      <div className="header-container">
        <Link  className="custom-link">Skills</Link>
        <Link  className="custom-link"> Projects</Link>
        <Link  className="custom-link">Contato</Link>
      </div>
    );
  }
  
  export default Header;
  