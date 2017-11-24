import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'dva/router';
import DocumentTitle from 'react-document-title';

class PhoneLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
  }
  getChildContext() {
    const { location } = this.props;
    return { location };
  }
  getPageTitle() {
    const { getRouteData, location } = this.props;
    const { pathname } = location;
    let title = '';
    getRouteData('PhoneLayout').forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name}`;
      }
    });
    return title;
  }
  render() {
    const { getRouteData } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div>
          {
            getRouteData('PhoneLayout').map(item =>
              (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              )
            )
          }
        </div>
      </DocumentTitle>
    );
  }
}

export default PhoneLayout;
