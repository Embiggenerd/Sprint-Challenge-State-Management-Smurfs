import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'

import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
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

  useEffect(() => { console.log('appStateSmurgs', smurfs) }, [smurfs])

  const handleSubmitSmurf = async ({ name, age, height }) => {
    console.log('onSubmitSmurf', name, age, height)
    let count = 2

    const newSmurf = {
      id: count,
      name,
      age,
      height
    }
    count++

    const { data } = await axios.post('http://localhost:3333/smurfs', newSmurf)
    setSmurfs(data)

  }
  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs, handleSubmitSmurf }} >
        <SmurfList />
        <SmurfForm />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
