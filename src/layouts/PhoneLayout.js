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

  render() {
    const { getRouteData } = this.props;
    return (
      <DocumentTitle title={'H5'}>
        <div style={{ height: '100%' }}>
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
