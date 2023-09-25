import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import './App.css';


function App() {
  return (
    <Router>
      <>
      <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

















// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Login from './components/login.component';
// import SignUp from './components/signup.component';
// import Profile from './components/profile';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={'/sign-in'}>
//               UDP-Telstra
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'}>
//                     Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Switch>
//               <Route exact path="/" component={Login} />
//               <Route path="/sign-up" component={SignUp} />
//               <Route path="/sign-in" component={Login} />
//               <Route path="/profile" component={Profile} />
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
