import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import AddNew from './AddNew';
import Authorize from './Authorize';
import Card from './Card';
import Content from './Content';

function Navbar(props) {
  //let match = useRouteMatch();

  

        return (
          <Router>
            <div>
              <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{ backgroundColor: "#235a78" }}
              >
                <a className="navbar-brand" href="#">
                  H A B A R . COM
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        All News
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sport">
                        Sport
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/politics">
                        Politics
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/technology">
                        Technology
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/business">
                        Business
                      </Link>
                    </li>
                    {props.isOnline ? (
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle active"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {props.email}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link className="dropdown-item" to="/addNew">
                            Add News
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/"
                            onClick={props.handleLogout}
                          >
                            Logout
                          </Link>
                      
                          {/*<div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a> */}
                        </div>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <Link className="nav-link" to="/authorize">
                          Sign In
                        </Link>
                      </li>
                    )}
                  </ul>

                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-light my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>

            <Switch>
              <Route path="/business">
                <Content news={props.news} category="Business" />
              </Route>
              <Route path="/sport">
                <Content news={props.news} category="Sport" />
              </Route>
              <Route path="/politics">
                <Content news={props.news} category="Politics" />
              </Route>
              <Route path="/technology">
                <Content news={props.news} category="Technology" />
              </Route>

              <Route path="/addNew">
                <AddNew
                  success={props.success}
                  title={props.title}
                  description={props.description}
                  url={props.url}
                  category={props.category}
                  handleAddNew={props.handleAddNew}
                  handleInputChange={props.handleInputChange}
                />
              </Route>

              <Route path="/authorize">
                {props.isOnline ? (
                  <Redirect to="/" />
                ) : (
                  <Authorize
                    wrongInput={props.wrongInput}
                    handleSubmit={props.handleSubmit}
                    email={props.email}
                    handleEmailChange={props.handleEmailChange}
                    password={props.password}
                    handlePasswordChange={props.handlePasswordChange}
                  />
                )}
              </Route>
              <Route path="/">
                <Content news={props.news} category={"All News"} />
              </Route>
            </Switch>
          </Router>
        );
    }

export default Navbar;