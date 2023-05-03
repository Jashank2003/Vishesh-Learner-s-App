import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Home from "../../pages/Home";

function Login() {

    const [error, setError] = useState(null);
    const [showAddress, setShowAddress] = useState(null);

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleDisconnect = () => {
        setIsLoggedIn(false);
        navigate('/login');
      };

    useEffect(() => {
      // Check if Metamask is installed and connected
      if (typeof window.ethereum !== 'undefined' && window.ethereum.isConnected()) {
        // Check if user is logged in
        window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
          if (accounts.length > 0) {
            // Set isLoggedIn to true if user is logged in with Metamask
            setIsLoggedIn(true);
            navigate('/home');
          } else {
            // Redirect to login page if user is not logged in with Metamask
            setIsLoggedIn(false);
            navigate('/login');
          }
        });

        // Add event listener to detect when the wallet is deattached
        window.ethereum.on('accountsChanged', (accounts) => {
          if (accounts.length === 0) {
            // Redirect to login page if the wallet is deattached
            setIsLoggedIn(false);
            navigate('/login');
          }
        });
      } else {
        // Redirect to login page if Metamask is not installed or not connected
        setIsLoggedIn(false);
        navigate('/login');
      }
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleDisconnect);
        return () => {
          window.ethereum.removeListener('accountsChanged', handleDisconnect);
        };
      }
    }, [navigate]);

    const loginMetaMask = () => {
        if(window.ethereum){
          window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
            fetchAllData(result[0]);
            setIsLoggedIn(true);
            alert("Login Successful");
            navigate('/home');
            console.log(showAddress);
          })
        }
        else{
          setError('Please Install Metamask');
          alert("Install Metamask");
        }
    }

    const fetchAllData = (fetch) => {
        setShowAddress(fetch);
    }

    return (
        <div>
            {isLoggedIn ? (
                // Render home page content if user is logged in
                <Home/>
            ) : (
                // Render login page content if user is not logged in
                <div>
                    <button onClick={loginMetaMask}>Login Using Metamask</button>
                </div>
            )}
        </div>
    );
}

export default Login;