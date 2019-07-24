import React from 'react';

// Components
import Menu from '../components/Menu';
import BookTypes from '../containers/BooksTypes';

const Sidebar = () => {
  return (
    <aside className="col-lg-2 col-sm-3 sidebar">
      <div className="sidebar-sticky">
        {<Menu />}
        {<BookTypes />}
      </div>
    </aside>
  );
};

export default Sidebar;
