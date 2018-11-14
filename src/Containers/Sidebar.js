import {connect} from 'react-redux'
import SidebarComponent from '../Components/Room/Sidebar'



export const Sidebar= connect(state => ({
    users: state.users
}), {})(SidebarComponent)