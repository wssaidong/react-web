import React, { Component } from 'react';
import { Popover, Button, Avatar } from 'antd';
import { connect } from 'dva';

import styles from './Gain.less';

@connect(state => ({
  gain: state.gain,
}))
class Gain extends Component {
  state = {
    visible: false,
    info: {
      image: '',
      desc: '',
    },
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'gain/getRandomInfo',
      payload: null,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gain.info) {
      this.setState({
        info: nextProps.gain.info,
      });
    }
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
    this.props.dispatch({
      type: 'gain/getRandomInfo',
      payload: null,
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <Popover
          content={<div className={styles.center}><a>{this.state.info.desc}</a></div>}
          title={<div className={styles.center}>{ this.state.info.image ? <Avatar size="large" src={this.state.info.image} /> : null }</div>}
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button type="primary">点我</Button>
        </Popover>
      </div>
    );
  }
}

export default Gain;
