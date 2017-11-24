import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import styles from './User.less';

@connect(state => ({
  osc: state.osc,
}))
class User extends Component {
  state = {
    user: {
      avatar: '',
    },
  }

  componentDidMount() {
    const match = this.props.match.params;

    this.props.dispatch({
      type: 'osc/getUserInfo',
      payload: match.id,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.osc.user) {
      this.setState({
        user: nextProps.osc.user,
      });
    }
  }

  render() {
    return (
      <div className={styles.main}>
        <div>
          <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" width="100%" src={this.state.user.avatar} />
            </div>
            <div className="custom-card">
              <h3>{this.state.user.name}</h3>
              <p>{this.state.user.location}</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default User;
