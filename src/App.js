import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import NavBar from './components/NavBar';
import AccountScreen from './screens/AccountScreen';
import AdminScreen from './screens/AdminScreen';
import LoggedScreen from './screens/LoggedScreen';
import LoginScreen from './screens/LoginScreen';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/admin" element={<AdminScreen/>}/>
      <Route path="/logged" element={<LoggedScreen/>}/>
      <Route path="/account" element={<AccountScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
