import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css/normalize.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()}, Carlos Cruz</p>
          {` `}
          <p>
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
