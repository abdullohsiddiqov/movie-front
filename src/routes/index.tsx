import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Navbar} from '../components/navbar'
import { AllCards } from "../components/allcards";
import { Register } from "../components/auth/register"
import { Login } from "../components/auth/login"
import App  from '../App'
const Routes = () => (
  <Router>
    <Switch>
      <Route index path='/' element={<App />} />
      <Route path='/movies' element={<AllCards/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Switch>
  </Router>
);

export default Routes;
