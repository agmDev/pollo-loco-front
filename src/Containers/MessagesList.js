import {connect} from 'react-redux'
import MessagesListComponent from '../Components/Room/MessagesList'



export const MessagesList= connect(state => ({
    messages: state.messages
}), {})(MessagesListComponent)