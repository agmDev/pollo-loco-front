import React from "react";
import { PropTypes } from "prop-types";
import Message from './Message';

export default class MessagesList extends React.Component {
   render() {
       return (
        <section>
            <div className="message-list" id="message-list" 
                ref={(div) => {
                    this.messageList = div;
                }}
            >
                {
                    this.props.messages.map(message => (
                        <Message className="message"
                        key={message.id}
                        {...message}
                        />
                    ))
                }
            </div>
        </section>
       );
   }
   scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
}

MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.number.isRequired,
           message: PropTypes.string.isRequired,
           author: PropTypes.string.isRequired,

        }).isRequired
    ).isRequired
}