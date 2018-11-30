import React from 'react';
import { PropTypes } from 'prop-types';

const Message = ({ message, author }) => (
  <li key={message} className="message">
    <div>
      {author}
    </div>
    <div>
      {message}
    </div>
  </li>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
