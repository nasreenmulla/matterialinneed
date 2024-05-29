import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import AllRoutes from './AllRoutes'
// import Selectbank from './components/SelectBank/Selectbank';

function App() {
  return (
       <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        </Routes>
        
        <AllRoutes/>
        {/* <Selectbank/> */}
       </Router>
       
       
  );
}

export default App;
