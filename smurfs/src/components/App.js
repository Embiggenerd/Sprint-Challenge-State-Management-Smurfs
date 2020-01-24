import React, { useEffect } from "react";
import "./App.css";
import axios from 'axios'

const App = () => {
  useEffect(() => {
    const getSmurfs = async () => {
      try {
        const { data } = await axios.get('http://localhost:3333/smurfs')
        console.log('getSmurfs data', data)
      } catch (error) {
        console.log('getSmurfs error', error)
      }
    }
    getSmurfs()
  }, [])



  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );

}

export default App;
