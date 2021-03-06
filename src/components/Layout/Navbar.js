import React, { useEffect, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Navbar = ({ history }) => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  history.listen(() => {
    if (showDropdown === false) {
      setShowDropdown(false);
    }
  });

  const toggleTheme = (e) => {
    setSwitcherValue((val) => (val = !val));
  };

  useEffect(() => {
    setSwitcherValue(true);
  }, [switcherValue]);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-nav main-nav">
        <div className="base-container">
          <div className="row no-gutters">
            <div className="col-lg-3">
              <Link to="/task-list" className="navbar-brand">
                <img
                  src={"/assets/images/logo.svg"}
                  alt="PromotionService by Habil"
                />
                <p>Pro-Promotion.com</p>
              </Link>
            </div>
            <div className="col-lg">
              <div className="center-menu">
                <ul className="nav">
                  <li className="nav-item">
                    <NavLink
                      to="/task-list"
                      exact
                      activeClassName="active"
                      className="nav-link"
                    >
                      <img
                        src={"/assets/images/task-list.svg"}
                        alt="Promotion Service Task List"
                      />
                      Task List
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/news"
                      activeClassName="active"
                      className="nav-link"
                    >
                      <img
                        src={"/assets/images/news.svg"}
                        alt="Promotion Service News"
                      />
                      News
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a href="ggrgr" className="nav-link">
                      <img
                        src={"/assets/images/help.svg"}
                        alt="Promotion Service Help"
                      />
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="user-info-nav">
                <div className="coin-info">
                  <a href="http" className="increase-btn-nav">
                    <img
                      src={"/assets/images/plus.svg"}
                      alt="Increase your promotion coin"
                    />
                  </a>
                  <div className="coin-balance">
                    <img
                      src={"/assets/images/coin.svg"}
                      alt="Promotion balance"
                    />
                    <p>2023</p>
                  </div>
                </div>
                <div className="user-dropdown btn">
                  <button
                    className="user-dropdown-btn"
                    onClick={() => setShowDropdown((val) => (val = !val))}
                  >
                    <img
                      src={"/assets/images/user-icon.svg"}
                      alt="Promotion User"
                    />
                    <img
                      className={`user-dropdown-btn-caret ${
                        showDropdown ? "rotated" : ""
                      }`}
                      src={"/assets/images/caret.svg"}
                      alt="Promotion Caret"
                    />
                  </button>
                  <CSSTransition
                    in={showDropdown}
                    timeout={200}
                    unmountOnExit
                    classNames="dropdown"
                    onEnter={() => setShowDropdown(true)}
                    onExit={() => setShowDropdown(false)}
                  >
                    <div className="user-dropdown-wrapper">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <NavLink to="/profile">
                            <img
                              src={"/assets/images/user-alt.svg"}
                              alt="Promotion User"
                            />
                            My profile
                          </NavLink>
                        </li>
                        <li className="list-group-item">
                          <Link to="/task-history">
                            <img
                              src={"/assets/images/task-list-white.svg"}
                              alt="Promotion Task List"
                            />
                            Task history
                          </Link>
                        </li>
                        <hr />
                        <li className="list-group-item">
                          <button className="theme-switcher-btn">
                            <p>
                              <img
                                src={"/assets/images/sun.svg"}
                                alt="Promotion toggle theme"
                              />
                              Dark Mode
                            </p>
                            <label
                              htmlFor="theme-switcher"
                              className="toggle-control"
                            >
                              <input
                                type="checkbox"
                                id="theme-switcher"
                                checked
                                value={switcherValue}
                                onChange={(e) => toggleTheme(e)}
                              />
                              <span className="control"></span>
                            </label>
                          </button>
                        </li>
                        <li className="list-group-item log-out">
                          <Link to="/">
                            <img
                              src={"/assets/images/log-out.svg"}
                              alt="Promotion Log Out"
                            />
                            Log out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </CSSTransition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
