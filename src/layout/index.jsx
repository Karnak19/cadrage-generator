import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Container className="mt-3">{children}</Container>
      {/* <Footer /> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
