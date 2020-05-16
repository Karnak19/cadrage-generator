import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Button,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { logOut } from '../auth/actions';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [routes] = useState([
    { id: 1, label: 'Home', requireAuth: false, link: '/' },
    { id: 2, label: 'Generate', requireAuth: true, link: '/generate' },
  ]);
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>Cadrage Generator</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="mr-auto">
          {routes
            .filter(
              (route) => isAuth === route.requireAuth || !route.requireAuth
            )
            .map((route) => {
              return (
                <NavItem key={route.id} label={route.label} url={route.link} />
              );
            })}
        </Nav>
        {!isAuth ? (
          <Button color="primary" tag={Link} to="/login">
            Log in
          </Button>
        ) : (
          <Button color="danger" onClick={() => dispatch(logOut())}>
            Log out
          </Button>
        )}
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
