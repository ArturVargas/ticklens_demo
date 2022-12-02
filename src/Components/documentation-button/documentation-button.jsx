import { NavLink } from 'react-router-dom';
import { DOCUMENTATION } from '../../utils/Constants/routes_constants';

//style
require('./documentation-button.css');


function DocumentationButton() {
  return (
    <>
    <NavLink className="nav-link" to={DOCUMENTATION}>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">Documentation</span>
      </button>
    </NavLink>
    </>
  )
}

export default DocumentationButton;