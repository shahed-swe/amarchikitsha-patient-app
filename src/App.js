import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// pages
import Home from './pages/home/Index';
import Login from './pages/auth/Login';
// import About from './pages/about/Index';
// import Users from './pages/users/Index';

const App = () => {
  return (

    <Router>
      <Routes>
        {/* <Route path="/" element={<App />}> */}
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="teams" element={<Teams />}> */}
        {/* <Route path=":teamId" element={<Team />} /> */}
        {/* <Route path="new" element={<NewTeamForm />} /> */}
        {/* <Route index element={<LeagueStandings />} /> */}
        {/* </Route> */}
        {/* </Route> */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<h1>Contant</h1>} />
        <Route path="*" element={<>404 Page</>} />
      </Routes>
    </Router>
  );
}

export default App;
