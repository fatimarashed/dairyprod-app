import React  from 'react';

import Login  from './components/Login/Login';
//import UsersProduct from './components/UsersProduct/UsersProduct.js';
import Registeration from './components/Registeration/Registeration.js';
 import Home from './Home';
 import Cart from './components/Cart/Cart'
 import NavBar from './components/Navbar/Navbar'

 import {
   BrowserRouter as Router,
 Switch,
  Route,
 
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }
  setUserAuth = (value) => this.setState({ isAuthenticated: true });
  render() {
    return (
      <div className="app">
        
        <Router>
        <NavBar />
       

          <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Cart" exact={true} component={Cart} />
            
              <Login path="/Login" setUserAuth={this.setUserAuth}  component={Login}/>
              
            
            {/* <Route exact path="/Registeration"> */}
              <Registeration path="/Registeration" setUserAuth={this.setUserAuth}  component={Registeration}/>
            {/* </Route> */}
            {/* <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/"> */}
           < Home/>
            {/* </PrivateRoute> */}
     
          </Switch>
        </Router>
      </div>
    );
  }
}
// function PrivateRoute({ children, isAuthenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/Login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

export default App;
