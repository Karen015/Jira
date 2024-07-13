import React from 'react';
import Register from './view/pages/auth/register'
import Header from './view/components/global/header';
import Login from './view/pages/auth/login'
import { db, auth, doc, getDoc, onAuthStateChanged } from './services/firebase/firebase'
import './App.css';
import Auth from './view/pages/auth';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuth: false,
      firstName: '',
      lastName: '',
      headline: ''
    }
  }

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        this.setState({
          isAuth: true
        })
        const { uid } = user;
        const ref = doc(db, 'registerUsers', uid)

        getDoc(ref).then((userData) => {
          if (userData.exists()) {
            this.setState({
              ...userData.data()
            })
          }
        })
      }
    }) 
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Header />
          <Auth />
      </div>
    );
  }
}

export default App