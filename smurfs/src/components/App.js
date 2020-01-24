import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'

import SmurfList from './SmurfList'
import { SmurfContext } from '../contexts'

const App = () => {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    const getSmurfs = async () => {
      try {
        const { data } = await axios.get('http://localhost:3333/smurfs')
        console.log('getSmurfs data', data)
        setSmurfs(data)
      } catch (error) {
        console.log('getSmurfs error', error)
      }
    }
    getSmurfs()
  }, [])

  useEffect(()=>{console.log('appStateSmurgs', smurfs)}, [smurfs])

  return (
    <div className="App">
      <SmurfContext.Provider value={{smurfs}} >
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
