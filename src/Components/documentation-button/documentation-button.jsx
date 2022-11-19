import { NavLink } from 'react-router-dom';
import { DOCUMENTATION } from '../../utils/Constants/routes_constants';

//style
require('./documentation-button.css');


function DocumentationButton() {
  return (
    <>
    <NavLink className="nav-link" to={DOCUMENTATION}>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
        </span>
        <span class="button-text">Documentation</span>
      </button>
    </NavLink>
    </>
  )
}

export default DocumentationButton;