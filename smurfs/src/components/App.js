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
        setSmurfs(data)
      } catch (error) {
        console.log('getSmurfs error', error)
      }
    }
    getSmurfs()
  }, [])

  const handleSubmitSmurf = async newSmurf => {

    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3333/smurfs',
      data: {
        ...newSmurf
      }
    })

    setSmurfs(data)
  }

  const handleDeleteSmurf = async smurfID => {

    const { data } = await axios({
      method: 'delete',
      url: `http://localhost:3333/smurfs/${smurfID}`
    })

    setSmurfs(data)
  }

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs, handleSubmitSmurf, handleDeleteSmurf }} >
        <h1>Add, delete a smurf</h1>
        <SmurfForm />
        <SmurfList />

      </SmurfContext.Provider>
    </div>
  );

}

export default App;
