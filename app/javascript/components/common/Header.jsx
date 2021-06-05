import React from 'react';
import { shape } from 'prop-types';
import { withRouter } from 'react-router-dom';

export const Header = ({ history }) => (
  <header>
    <div>
      <div
        role="link"
        tabIndex="0"
        onClick={() => history.push('/')}
        className="uppercase clickable"
      >
        Cafe React
      </div>
    </div>
  </header>
);

Header.propTypes = {
  history: shape({}).isRequired
};

export default withRouter(Header);
