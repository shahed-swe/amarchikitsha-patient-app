import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// components
import ScrollToTop from './components/scrolltop/Index'
import { FourOfFour } from './components/FourofFour/Index';
// pages
import Home from './pages/home/Index';
import Login from './pages/auth/Login';
import Registraion from './pages/auth/Registration';
// import About from './pages/about/Index';
// import Users from './pages/users/Index';


const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registraion} />
            {/* <Route exact path="/register" component={Register} /> */}
            {/* <Route exact path="/authority" component={AuthorityRegistration} />
            <Route exact path="/reset" component={ResetRequest} />
            <Route exact path="/invitation/:uid" component={DokanInvitation} />
            <Route exact path="/invitation/error" component={InvitationError} />
            <RoleBaseRoute path="/hospitals" role="admin" component={ShopIndex} />
            <RoleBaseRoute path="/dashboard" role="admin" component={MasterIndex} />
            <RoleBaseRoute path="/messenger" role="admin" component={Messenger} />
            <RoleBaseRoute path="/members" role="admin" component={Member} />
            <RoleBaseRoute path="/userblock" role="admin" component={UserManage} /> */}
            <Route path="*" component={FourOfFour} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
