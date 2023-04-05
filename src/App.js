
import './App.css';
import './sb-admin-2.css';
import DashBoard from './Components/DashBoards/DashBoard';
import Users from './Components/DashBoards/Users';

import Login from './Components/Login/Login';
import Portal from './Components/Portal/Portal';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreateUser from './Components/DashBoards/CreateUser';
import Sample from './Components/DashBoards/Sample/Sample';
import UserView from './Components/DashBoards/UserView';
import EditUser from './Components/DashBoards/EditUser';
import Demo from './Components/DashBoards/Demo';
import Sample2 from './Components/DashBoards/Sample/Sample2';
import Card from './Components/DashBoards/Card';
import Sample3 from './Components/DashBoards/Sample/Sample3';
import Sample4 from './Components/DashBoards/Sample/Sample4';
import MiniCard1 from './Components/DashBoards/MiniCard/MiniCard1';
import { UserProvider } from './UserContext';
import Profile from './Components/Profile/Profile';


function App() {
  return (
  
    <BrowserRouter>
   
     
       <UserProvider>
       <Routes>
        <Route path='/' element= { <Login/>}/>
        <Route path='/portal' element= { <Portal/>}>
              <Route path='dashboard' element= { <DashBoard/>}/>
              <Route path='users' element= {  <Users/>}/>
              <Route path='profile' element= {  <Profile/>}/>
              <Route path='users/:id' element={  <UserView/>}/>
              <Route path='user/edit/:id' element= {  <EditUser/>}/>
              <Route path='create-user' element= {  <CreateUser/>}/>
              <Route path='sample' element = {  <Sample/>}/>
              <Route path='sample-2' element = { <Sample2/>}/>
              <Route path='sample-3' element = {<Sample3/>}/>
              <Route path='sample-4' element = {<Sample4/>}/>
        </Route>
        </Routes>
       </UserProvider>
         
        
    </BrowserRouter>
    
  );
}

export default App;
