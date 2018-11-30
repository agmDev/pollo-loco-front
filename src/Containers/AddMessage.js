import { connect } from 'react-redux';
import AddMessageComponent from '../Components/Room/AddMessage';
import { addMessage } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author));
  },
});


const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent);

export default AddMessage;
