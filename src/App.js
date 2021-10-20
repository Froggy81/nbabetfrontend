import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Bets } from './components/Bets'
import { DisplayBoard } from './components/DisplayBoard'
import { getAllBets } from './services/service'

function App() {

  //const [user, setUser] = useState({})
  const [bets, setBets] = useState([])
  //const [numberOfUsers, setNumberOfUsers] = useState(0)


  const fetchAllBets = () => {
    getAllBets()
      .then(bets => {
        console.log(bets)
        setBets(bets);
        //setNumberOfUsers(users.length)
      });
  }

  useEffect(() => {
    getAllBets()
      .then(bets => {
        console.log(bets)
        bets.sort((a, b) => a.betid - b.betid);
        setBets(bets);
        //setNumberOfUsers(bets.length)
      });
  }, [])

    return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">              
             </div>
           </div>
          <div className="row mrgnbtm">
            <Bets bets={bets}></Bets>
          </div>
        </div>
    );
}

export default App;
