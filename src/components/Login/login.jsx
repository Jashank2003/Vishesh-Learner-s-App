
export default function Login() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('Metamask is installed');
  }
  else{
    alert("Login Successful")
  }
};