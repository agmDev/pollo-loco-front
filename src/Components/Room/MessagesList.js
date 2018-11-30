import React from 'react';
import { PropTypes } from 'prop-types';
import Message from './Message';

export default class MessagesList extends React.Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const { scrollHeight } = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  render() {
    const { messages } = this.props;
    return (
      <section>
        <div
          className="message-list"
          id="message-list"
          ref={(div) => {
            this.messageList = div;
          }}
        >
          {
            messages.map(message => (
              <Message
                className="message"
                key={message.id}
                {...message}
              />
            ))
            }
        </div>
      </section>
    );
  }
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,

    }).isRequired,
  ).isRequired,
};
