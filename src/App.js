import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Router,  Routes, Route,} from 'react-router';

function App() {
  return (
    <>
    <Router>
   
   <Route path='/' element={ <Navbar/>}/>
   
    </Router>
    
    </>

  );
}

export default App;
