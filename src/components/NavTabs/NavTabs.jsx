import { Link } from "react-router-dom";
import brand from '../../static/media/logo.png';

export default function NavTabs({navLinks}) {
  let url = window.location.pathname;
  
  ["educacion","logros","hobbies"].forEach(str=>url = url.replace(str, ""))
  console.log(url);

  return(
    <nav className="">
      <ul className="nav nav-tabs fs-4 justify-content-end">
        <li className="nav-item me-auto">
          <Link className="nav-link" to="/">
            <img src={brand} alt="logo" className="img-fluid" style={{height: 40}}/>
          </Link>
        </li>
        {
          navLinks.map((link, index) => {
            // console.log(link);
            return(
              <li className="nav-item mt-auto" key={index}>
                <Link className={`fs-5 nav-link ${url === link.url ? 'active' : ''}`} to={link.url}>{link.name}</Link>
              </li>
            )
          })
        }
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#tab2Id">Action</a>
            <a className="dropdown-item" href="#tab3Id">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#tab4Id">Action</a>
          </div>
        </li> */}
      </ul>
    </nav>
  )
};
