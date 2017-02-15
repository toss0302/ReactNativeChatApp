import React from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import Home from './components/Home';
import Chat from './components/Chat';

const styles = StyleSheet.create({
  scene: {
    paddingTop: Platform.OS === 'ios' ? 64 : 54,
    marginLeft: 0,
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <Router>
        <Scene key='root' style={styles.scene}>
          <Scene key='home' component={Home} title='Home' />
          <Scene key='chat' component={Chat} title='Chat' />
        </Scene>
      </Router>
    );
  }
}
