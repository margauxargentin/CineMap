import React from 'react';
import './Chat.css';

class Chat extends React.Component {

  constructor(props) {
    super(props)
    /*this.state = {
      item: 0,
    }*/
  }

  render() {
    return (
      <div className='Chat'>
        <div className="messages-container">
          <p className="external-message message">He</p>
          <p className="internal-message message">Oh</p>

        </div>
        <form className="message-input">
          <input name="message" type="text"></input>
          <button type="submit">Envoyer</button>
        </form>
  
      </div>
    );
  }

};

export default Chat;