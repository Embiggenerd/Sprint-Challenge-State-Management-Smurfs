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
    console.log('handleDeleteSMurf', smurfID)
    const { data } = await axios({
      method: 'delete',
      url: `http://localhost:3333/smurfs/${smurfID}`
    })

    setSmurfs(data)
  }

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs, handleSubmitSmurf, handleDeleteSmurf }} >
        <SmurfList />
        <SmurfForm />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
