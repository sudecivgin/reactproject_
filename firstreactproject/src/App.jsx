import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'

function App() {
  const handleClick = () => {
    setMessage('Hoş Geldin Mehmet!');
  };
  const [message, setMessage] = useState('');
 return (

<div>
  <div>
  <p>Kullanıcı adı giriniz:</p>
  <input type='text'/>
    </div> 

    <div>
  <p>Şifre giriniz:</p>
  <input type='text'/>
    </div>

    <button onClick={handleClick}>Giriş Yap </button>
    {message && <p>{message}</p>}
    <div>
  </div>

 </div>

  )
}

export default App
