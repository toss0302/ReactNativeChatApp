import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import {
  GiftedChat,
  Actions,
  Bubble,
} from '../core/GiftedChat';

const $coolBlack = 'black';
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: $coolBlack,
    margin: 20,
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  },
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name :
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder="John Snow"
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            // alert(this.state.name);
            // console.log(this.state.name);
            // debugger;
            Actions.chat({
              name: this.state.name,
            });
          }
        }
        >
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
