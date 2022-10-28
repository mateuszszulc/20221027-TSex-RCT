import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

// Static data-model dla menu:
const menuItems = [
    { title: 'Aukcje', aHref:'/auctions'  },
    { title: 'Podpowiadamy', aHref:'/advices'  }
];

function MenuBar () {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 px-2">
      <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} `}>
        <ul className="navbar-nav">
          {
            menuItems.map( ( item ) => (
                <li key={item.title} className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to={item.aHref}>
                    {item.title}
                  </NavLink>
                </li>
              )
            )
          }
        </ul>
      </div>
      <div>
        <NavLink className="btn btn-primary mx-2" to="/log-in">
          Logowanie <FontAwesomeIcon icon={faSignInAlt}/>
        </NavLink>
        <NavLink className="btn btn-secondary mx-2" to="/cart">
          Koszyk <FontAwesomeIcon icon={faShoppingBasket}/>
        </NavLink>
      </div>
    </nav>
  )
}

export default MenuBar;
