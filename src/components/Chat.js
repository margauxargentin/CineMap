import React from 'react';
import './Chat.css';

const URL = "wss://imr3-react.herokuapp.com";

class Chat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      input: ''
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.setInput = this.setInput.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.socket = new WebSocket(URL);
    this.username = `user${Math.floor(Math.random() * 900000) + 100000}`;
  }

  setInput(value) {
    this.setState({ input: value });
  }

  sendMessage(e){
    e.preventDefault();    
    const message = { name: this.username, message: this.state.input};
    this.socket.send(JSON.stringify(message));
    this.setInput('');
  };

  componentDidMount() {
    console.log(`user ${this.username} connected`)
    this.socket.onopen = () => {
      this.setState({
        connected: true
      });
    };

    this.socket.onmessage = evt => {
      const messages = JSON.parse(evt.data);
      messages.map(message => this.addMessage(message));
    };

    this.socket.onclose = () => {
      this.setState({
        connected: false,
        ws: new WebSocket(URL)
      });
    };
  }

  addMessage(msg) {
    this.setState((prevState) => ({
      messages: [...prevState.messages, msg]
    }));
  }

  render() {
    return (
      <div className='Chat'>
        <div className="messages-container">
          <p className="external-message message">He</p>
          <p className="internal-message message">Oh</p>
          {this.state.messages.map((message, index) => (
            <p key={index} className={"message " + (this.username === message.name ? 'internal-message' : 'external-message')}>
              {this.username !== message.name  ? <span class="chat-username">{message.name} : </span> : null}
              {message.message}
              </p>
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