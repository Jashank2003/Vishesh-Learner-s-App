import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './components/Login/login';
import DrugList from './pages/drugs';

const drugs = [
  {
    id: 1,
    name: 'Drug A',
    description: 'This is drug A',
    imgUrl: '/assets/images/drug-a.jpg',
    mfgDate: '2023-04-01T00:00:00Z',
    expDate: '2025-03-31T23:59:59Z'
  },
  {
    id: 2,
    name: 'Drug B',
    description: 'This is drug B',
    imgUrl: '/assets/images/drug-b.jpg',
    mfgDate: '2022-12-01T00:00:00Z',
    expDate: '2024-11-30T23:59:59Z'
  },
  {
    id: 3,
    name: 'Drug C',
    description: 'This is drug C',
    imgUrl: '/assets/images/drug-c.jpg',
    mfgDate: '2022-06-01T00:00:00Z',
    expDate: '2024-05-31T23:59:59Z'
  },
  // and so on, up to 30 elements
];

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
            <Route path="/home" element={<Home />} />
            <Route path='/' element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/drugs' element={<DrugList drugs = {drugs} />} />
          </Routes>
      </div>
    </div>
  )
}