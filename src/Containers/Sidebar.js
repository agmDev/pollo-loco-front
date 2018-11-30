import { connect } from 'react-redux';
import SidebarComponent from '../Components/Room/Sidebar';


const Sidebar = connect(state => ({
  users: state.users,
}), {})(SidebarComponent);

export default Sidebar;
