import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavItem as RNavItem, NavLink } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

function NavItem({ label, url }) {
  const { pathname } = useLocation();
  const [isActive, setActive] = useState(pathname === url);

  useEffect(() => {
    setActive(pathname === url);
  }, [pathname, url]);

  return (
    <RNavItem active={isActive}>
      <NavLink tag={Link} to={url}>
        {label}
      </NavLink>
    </RNavItem>
  );
}

export default NavItem;

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
