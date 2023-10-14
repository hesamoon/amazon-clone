import './styles/App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './pages/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Payment from './pages/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Parse from 'parse/dist/parse.min.js';

// Parse initialization configuration
const PARSE_APPLICATION_ID = '0H0kDF53J04Adf5XVi2jNYfRMYd9myemLQVwXB1q';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'WizsPWP6cqQWOeCA2HaQwVANd60fgGAZ9BgAq1ca';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const promise = loadStripe('pk_test_51NtFNfDRFxIwepsEGW4dLHP2TdWC9krqddKatyROrQjwfHpt9JUiJze8TUFLVcqJRKqh5lWXVe6PbScJCIHx1mIt00ZRQS8HMU')

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {

    // console.log(user);

    const currentUser = Parse.User.current();

    // if user logged in
    if(currentUser){
      dispatch({
        type: 'SET_USER',
        user: currentUser,
      })
    } else { // if user logged out
      dispatch({
        type: 'SET_USER',
        user: null,
      })
    }
  }, [])

  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}/>
          <Route path='/checkout' element={<><Header/><Checkout/></>}/>
          <Route path='/payment' element={
          <>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/register' element={<Register/>}/> */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
