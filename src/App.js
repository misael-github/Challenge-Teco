import './App.css';
import Title from './components/Title';
import Table from './components/Table';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <Title title="App de usuarios"></Title>
          <Table></Table>   */}
          {/* <Title title="App de usuarios"></Title> */}
      <Routes>
          {/* <Route exact path="/" element={<Title></Title>}></Route> */}
          {/* <Route exact path="/" element={<Table></Table>}></Route> */}
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact
            path="/create-user"
            element={<CreateUser></CreateUser>}
          ></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
