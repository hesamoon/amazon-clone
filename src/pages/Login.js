import React, { useState } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import Parse from 'parse/dist/parse.min.js';

function Login() {

    const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [{basket, user}, dispatch] = useStateValue();


    const signIn = async (e) => {
        e.preventDefault();

        const usernameValue = username;
        const passwordValue = password;

        try {
            const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
            setUsername('');
            setPassword('');

            dispatch({
                type: 'SET_USER',
                user: loggedInUser,
            })
            navigate('/')
            return true;
          } catch (error) {
            // Error can be caused by wrong parameters or lack of Internet connection
            alert(`Error! ${error.message}`);
            return false;
          }
    }

    const register = async (e) => {
        e.preventDefault();

        const usernameValue = username
        const passwordValue = password

        try {
          // Since the signUp method returns a Promise, we need to call it using await
          const user = await Parse.User.signUp(usernameValue, passwordValue);
        //   alert(
        //     `Success! User ${user.getUsername()} was successfully created!`
        //   );
        
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        
          navigate('/')
          return true;
        } catch (error) {
          // Error can be caused by lack of Internet connection
          alert(`Error! ${error.message}`);
          return false;
        }
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src='https://sf.ezoiccdn.com/ezoimgfmt/www.schemecolor.com/wp-content/uploads/amazon-company-official-logo.png?ezimgfmt=rs:200x60/rscb1/ngcb1/notWebP' alt=''/>
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>Username</h5>
                <input type='username' value={username} onChange={e => setUsername(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInBtn'>Sign In</button>
            </form>
            <p>
                hi i am kvpod jkvnev owvnv o33 kvn v svnsdvndskivs sdvnndsovnv jniew kvnowiv kincn oqo iknc oqjo 93vvd knvie.
            </p>
            <button className='login__regBtn' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
