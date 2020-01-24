import React, { useState, useContext } from 'react'

import { SmurfContext } from '../contexts';

const SmurfForm = () => {
    const { handleSubmitSmurf, handleEditSmurf } = useContext(SmurfContext)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [height, setHeight] = useState("")

    const handleOnChange = (event, setter) => {
        setter(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleSubmitSmurf({ name, age, height })
        setName("")
        setAge("")
        setHeight("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={event => handleOnChange(event, setName)} value={name} placeholder="Name" />
            <input onChange={event => handleOnChange(event, setAge)} value={age} placeholder="Age" />
            <input onChange={event => handleOnChange(event, setHeight)} value={height} placeholder="Height" />
            <input type="submit" value="submit" />
        </form>
    )
}

export default SmurfForm