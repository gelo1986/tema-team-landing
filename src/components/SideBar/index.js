import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import emailLogo from 'assets/images/email.png';
import gitLogo from 'assets/images/github.png';
import stackLogo from 'assets/images/stack-overflow.png';
import './style.scss';

const SideBar = ({ path }) =>
<div className="sidebar">
  { console.log('PATH', path) }
  <div className="sidebar__logo">
    <div className="sidebar__logo__text">Tema&apos;s Team</div>
  </div>
  <div className="sidebar__buttons">
    <Link className={`sidebar__buttons__about-button${path.match(/about/) ? '__active' : ''}`} to="/about">
      About
    </Link>
    <Link className={`sidebar__buttons__archive-button${path.match(/archive/) ? '__active' : ''}`} to="/archive">
      Archive
    </Link>
  </div>
  <div className="sidebar__links">
    <a href="mailto:tema@tema.ws">
      <img alt="email" src={emailLogo} className="sidebar__links__email" />
    </a>
    <a rel="noopener noreferrer" href="https://stackoverflow.com/users/7862620/temakozyrev" target="_blank">
      <img alt="stack" src={stackLogo} className="sidebar__links__stack" />
    </a>
    <a rel="noopener noreferrer" href="https://github.com/TemaKozyrev" target="_blank">
      <img alt="git" src={gitLogo} className="sidebar__links__git" />
    </a>
  </div>
  <div className="sidebar__navigation-buttons">
    <Link className={`sidebar__navigation-buttons__button${path === '/about' ? '__active' : ''}`} to="/about">Main</Link>
    <Link className={`sidebar__navigation-buttons__button${path === '/about/team' ? '__active' : ''}`} to="/about/team">Team</Link>
    <Link className={`sidebar__navigation-buttons__button${path === '/about/ci' ? '__active' : ''}`} to="/about/ci">CI/CD</Link>
    <Link className={`sidebar__navigation-buttons__button${path === '/about/workflow' ? '__active' : ''}`} to="/about/workflow">workflow</Link>
    <Link className={`sidebar__navigation-buttons__button${path === '/about/tools' ? '__active' : ''}`} to="/about/tools">Tools</Link>
  </div>
</div>;

SideBar.propTypes = {
  path: PropTypes.string.isRequired,
};

export default SideBar;
