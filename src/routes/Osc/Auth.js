import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import styles from './Auth.less';

class Auth extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div className={styles.main}>
        <div>
          <Row type="flex" justify="center" align="top">
            <Col>
              <img src="http://www.oschina.net/build/oschina/components/imgs/oschina.svg?t=1484580392000" alt="" />
            </Col>
          </Row>
        </div>
        <div className={styles.div}>
          <Row type="flex" justify="center" align="top">
            <Col>
              <a href="http://api.laystall.top/ms/auth/osc/grant">
                <Button size="large" type="primary">
                  授权
                </Button>
              </a>
            </Col>
          </Row>
        </div>


      </div>
    );
  }
}

export default Auth;
