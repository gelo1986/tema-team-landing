import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Layout = ({ children }) =>
<div className="layout">
  {children}
</div>;

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
