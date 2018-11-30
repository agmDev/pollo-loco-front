import { connect } from 'react-redux';
import MessagesListComponent from '../Components/Room/MessagesList';


const MessagesList = connect(state => ({
  messages: state.messages,
}), {})(MessagesListComponent);

export default MessagesList;
