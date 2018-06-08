import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import 'assets/screens.scss';
import './style.scss';

const HomeScreen = ({ redditPosts }) => (
  <div>
    123
  </div>
);

HomeScreen.propTypes = {
  redditPosts: PropTypes.any,
};

export default compose(
)(HomeScreen);
