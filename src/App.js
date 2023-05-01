import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './components/Login/login';

export default function App() {

  // const navigate = useNavigate();

  // const navigateToLogin = () => {
  //   navigate('./login', {replace: true});
  // };

  // const navigateHome = () => {
  //   navigate('/');
  // };

  return (
    <div>
      <div>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}