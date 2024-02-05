import React from 'react';
import './Chat.css';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

class Chat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      input: ''
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.setInput = this.setInput.bind(this)
  }
  
  setInput(value){
    this.setState({ input: value });
  }

  sendMessage(e) {
    e.preventDefault();
    socket.emit('chat message', this.state.input);
    this.setInput('');
  };

  componentDidMount() {
    // Subscribe to 'chat message' event
    socket.on('chat message', (msg) => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, msg]
      }));
    });
  }

  componentWillUnmount() {
    // Unsubscribe from 'chat message' event when component unmounts
    socket.off('chat message');
  }

  render() {
    return (
      <div className='Chat'>
        <div className="messages-container">
          <p className="external-message message">He</p>
          <p className="internal-message message">Oh</p>
          {this.state.messages.map((message, index) => (
            <p key={index} className="external-message message">{message}</p>
          ))}

        </div>
        <form className="message-input" onSubmit={this.sendMessage}>
          <input
            name="message"
            type="text"
            value={this.input}
            onChange={(e) => this.setInput(e.target.value)}></input>
          <button type="submit">Envoyer</button>
        </form>

      </div>
    );
  }

};

export default Chat;