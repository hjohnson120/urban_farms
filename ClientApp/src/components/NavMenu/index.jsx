import React, { useState, useEffect } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './style.scss'
import { GoogleLogout, GoogleLogin } from 'react-google-login'

const NavMenu = () => {
  const displayName = NavMenu.name
  const [collapsed, setCollapsed] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [accessToken, setAccessToken] = useState('')
  const [user, setUser] = useState(null)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const responseGoogle = response => {
    if (response.accessToken) {
      const userInfo = response.profileObj
      setIsSignedIn(true)
      setUser({
        email: userInfo.email,
        firstName: userInfo.givenName,
        lastName: userInfo.familyName,
      })
      setAccessToken(response.accessToken)
    }
    // window.location.href = '/home'
  }

  console.log(isSignedIn)

  const logout = () => {
    window.location.href = '/'
    setIsSignedIn(false)
  }

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            Creek Bottom Farms
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={collapsed}
            navbar
          >
            {!isSignedIn ? (
              <GoogleLogin
                clientId="379748035017-907fuiclnmjc5esg1926ot6nqlp2jcr9.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            ) : (
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/products">
                    Products
                  </NavLink>
                </NavItem>
                <GoogleLogout
                  clientId="379748035017-907fuiclnmjc5esg1926ot6nqlp2jcr9.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  isSignedIn={false}
                ></GoogleLogout>
              </ul>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavMenu
