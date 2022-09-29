import './App.css';
import Title from './components/Title';
import Table from './components/Table';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route
          exact
          path="/create-user"
          element={<CreateUser></CreateUser>}
        ></Route>
        <Route
          exact
          path="/edit-user/:id"
          element={<EditUser></EditUser>}
        ></Route>
        <Route exact path="/get-user-dni/:dni" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
