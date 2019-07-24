import React from 'react';

const BOOK_LOGO = '../assets/images/logo.png';
const USER_AVATAR = '../assets/images/user.png';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top flex-md-nowrap p-0">
      <span className="mobile-menu d-md-none">
        <i className="icon ion-md-menu" />
      </span>
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        <img src={BOOK_LOGO} className="logo" alt="Books Dashboard" />
      </a>
      <span className="mobile-profile-setting d-md-none">
        <i className="icon ion-md-more" />
      </span>
      <div className="navbar-menu-content w-100">
        <div className="search-form-wrapper w-50">
          <form className="search-books">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-link" type="submit">
              <i className="icon ion-md-search" />
            </button>
          </form>
        </div>
        <ul className="navbar-nav navbar-custom">
          <li className="nav-item notifications">
            <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="icon ion-md-notifications-outline" />
              <sup>1</sup>
            </span>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Notification One
              </a>
              <a className="dropdown-item" href="#">
                Notification two
              </a>
              <a className="dropdown-item" href="#">
                Notification three
              </a>
            </div>
          </li>
          <li className="nav-item user-info-block">
            <div className="media" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="media-body">
                <h5 className="mt-0 mb-1">Brawn Smith</h5>
              </div>
              <img src={USER_AVATAR} className="align-self-center ml-3" alt="Brawn Smith" />
            </div>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Mail
              </a>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
