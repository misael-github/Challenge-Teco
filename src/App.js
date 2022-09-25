import './App.css';
import Title from './components/Title';
import Table from './components/Table';
import CreateUser from './pages/CreateUser';
import {Route, Routes, Switch, BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Title title="App de usuarios"></Title>
          <Table></Table>  
      <Routes>
          <Route path="/" element={<Title></Title>}></Route>
          <Route path="/" element={<Table></Table>}></Route>
          <Route
            path="/create-user"
            element={<CreateUser></CreateUser>}
          ></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
