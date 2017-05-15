import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <div id="navbar" className="container custom-header">
        <div className="navbar-header">
          <h1>Tango</h1>
        </div>
        <div  className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <IndexLink to='/' activeClassName='active'>
                Connexion
              </IndexLink>
            </li>
            <li>
              <Link to='/project' activeClassName='active'>
                 Ajouter une réalisation
              </Link>
            </li>
            <li>
              <Link to='/memberInfo' activeClassName='active'>
                Consulter un membre
              </Link>
            </li>
            <li>
              <Link to='/searchMember' activeClassName='route--active active'>
                Rechercher un membre
              </Link>
            </li>
          </ul>
        </div>
      </div>
  </div>
)

export default Header
