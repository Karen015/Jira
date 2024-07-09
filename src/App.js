import Register from './view/pages/auth/register'
import Header from './view/components/global/header';
import Login from './view/pages/auth/login'
import './App.css';
import Auth from './view/pages/auth';


function App() {
  return (
    <div className="App">
        <Header />
        {/* <Register />

        <Login /> */}

        <Auth />
    </div>
  );
}

export default App