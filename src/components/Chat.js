import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
    };
  }
  render() {
    return (
      <GiftedChat
        message={this.state.message}
        // onSend={(message) => {
        //   // send message to  your backend
        // }}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

Chat.defaultProps = {
  name: 'Jhone',
};

Chat.propTypes = {
  name: React.PropTypes.string,
};
