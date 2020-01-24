import React, { useState, useEffect, useContext } from 'react'

import { SmurfContext } from '../contexts';

const SmurfForm = () => {
    const { handleSubmitSmurf } = useContext(SmurfContext)

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => { console.log(name, age, height) }, [name, age, height])
    const handleOnChange = (event, setter) => {
        setter(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit', name, age, height)
        handleSubmitSmurf({ name, age, height })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={event => handleOnChange(event, setName)} value={name} placeholder="Name" />
            <input onChange={event => handleOnChange(event, setAge)} value={age} placeholder="Age" />
            <input onChange={event => handleOnChange(event, setHeight)} value={height} placeholder="Height" />
            <button type="submit">{"submit"}</button>
        </form>
    )
}

export default SmurfForm