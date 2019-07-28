import React, { Component, Fragment } from 'react';

// Components
import Navigation from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ContentHeader from '../containers/ContentHeader';
import BookList from '../containers/Books';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {<Navigation />}
        <section className="container-fluid">
          <div className="row">
            {<Sidebar />}
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-2">
              <div className="container-fluid">
                <div className="page-content-wrapper">
                  <ContentHeader />
                  <section className="page-body">
                    <BookList />
                  </section>
                </div>
              </div>
            </main>
          </div>
        </section>
      </Fragment>
    );
  }
}
