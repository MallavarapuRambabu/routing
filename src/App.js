import logo from './logo.svg';
import './App.css';
import{Routes,Route}from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Dashbord from './Dashbord';
import Sucess from './Sucess';
import PageNotFound from './PageNotFound';
import NewProjectss from "./NewPojectss"
import FetureProjects from "./FetureProjects"
import Users from './Users';
import UseDetailss from './UseDetailss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        {/* <Route path='/contact/:contactId' element={<Bundil/>}></Route> */}
        <Route path='/dashbord' element={<Dashbord/>}>
          <Route index element={<FetureProjects/>}></Route>
          <Route path="newpoject" element={<NewProjectss/>}></Route>
          <Route path="fewpoject" element={<FetureProjects/>}></Route>
        </Route>
        <Route path='/sucess' element={<Sucess/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/users/:id' element={<UseDetailss/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
