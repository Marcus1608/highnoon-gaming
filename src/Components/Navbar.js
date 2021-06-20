import React, { useState } from 'react';
import './Navbar.scss';

import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [search, setSearch] = useState(true);
  const [events, setEvents] = useState(true);
  const [standings, setStanding] = useState(true);

  const showSearchbar = () => {
    setSearch(!search);
  };

  return (
    <>
      <div className="nav-container">
        {/* top nav */}
        <section className="top-navbar">
          <section className="logo-section">
            <Link to="/highnoon-gaming">Highnoon Gaming</Link>
          </section>
        </section>

        {/* bottom nav */}
        <section className="bottom-navbar">
          <div
            className={toggleMenu ? 'hamburger-menu exit' : 'hamburger-menu'}
            onClick={() => setToggleMenu(!toggleMenu)}
          ></div>

          <ul className="ul-lg">
            {/* home */}
            <NavLink
              exact
              to="/highnoon-gaming"
              className="mainLink"
              activeClassName="activeLink"
            >
              <li>Home</li>
            </NavLink>

            {/* events */}
            <NavLink
              exact
              to="/events"
              className="mainLink"
              activeClassName="activeLink"
              onMouseEnter={() => setEvents(!events)}
              onMouseLeave={() => setEvents(true)}
            >
              <li>
                Events
                <i
                  className={
                    events
                      ? 'fas fa-angle-double-up customPos-arrow'
                      : 'fas fa-angle-double-down customPos-arrow'
                  }
                ></i>
                <ul className={events ? 'dropdown-list' : 'show-dropdown-list'}>
                  <section className="li-bg">
                    <Link className="li-bg--link" to="/weekly">
                      <li className="dropdown-content">Weekly Events</li>
                    </Link>
                    <Link className="li-bg--link" to="/special">
                      <li className="dropdown-content">Special Events</li>
                    </Link>
                    <Link className="li-bg--link" to="/tournaments">
                      <li className="dropdown-content">Tournaments</li>
                    </Link>
                    <Link className="li-bg--link" to="/animekon">
                      <li className="dropdown-content">Animekon</li>
                    </Link>
                  </section>
                </ul>
              </li>
            </NavLink>

            {/* standings */}
            <NavLink
              exact
              to="/standings"
              className="mainLink"
              activeClassName="activeLink"
              onMouseEnter={() => setStanding(!standings)}
              onMouseLeave={() => setStanding(true)}
            >
              <li>
                Standings{' '}
                <i
                  className={
                    standings
                      ? 'fas fa-angle-double-up'
                      : 'fas fa-angle-double-down'
                  }
                ></i>
                <ul
                  className={
                    standings ? 'dropdown-list' : 'show-dropdown-list standings'
                  }
                >
                  <section className="li-bg">
                    <Link className="li-bg--link">
                      <li className="dropdown-content">Street Fighter</li>
                    </Link>
                    <Link className="li-bg--link">
                      <li className="dropdown-content">Tekken</li>
                    </Link>{' '}
                    <Link className="li-bg--link">
                      <li className="dropdown-content">Dragonball Fighter Z</li>
                    </Link>
                    <Link className="li-bg--link">
                      <li className="dropdown-content">Super Smash Bros.</li>
                    </Link>
                    <Link className="li-bg--link">
                      <li className="dropdown-content">Mortal Kombat</li>
                    </Link>
                  </section>
                </ul>
              </li>
            </NavLink>

            <NavLink
              exact
              to="/news"
              className="mainLink"
              activeClassName="activeLink"
            >
              <li>News</li>
            </NavLink>
          </ul>

          <section className="account-search">
            <Link to="/login">
              <p className="login">Login</p>
            </Link>
            <p className="slash">/</p>
            <Link to="/signup">
              <p className="signup">Signup</p>
            </Link>
            <i className="fas fa-search" onClick={showSearchbar} />
          </section>
        </section>
      </div>

      <div className={toggleMenu ? 'nav-menu' : 'nav-menu hide'}>
        <ul className="nav-menu--ul">
          <Link to="/highnoon-gaming">
            <li>Home</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/standings">
            <li>Standings</li> 
          </Link>
        </ul>
      </div>

      <form action="" method="get">
        <input type="search" className={search ? 'search' : 'showSearch'} />
      </form>
    </>
  );
};

export default Navbar;
