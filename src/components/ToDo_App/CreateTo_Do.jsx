import React, { useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'

function CreateTo_Do({ handleWork }) {
    const [text, setText] = useState("")
    const [Error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.length > 10) {
            const newWork = {
                id: new Date().getTime(),
                task:  text 
            }
            handleWork(newWork)
        }
        setText("")
    }

    const handleTextChange = (event) => {
        setText(event.currentTarget.value)
        
        if(text!== "" && text.length < 10){
            setError(true)
        }
        else {
            setError(false)
        }
    }

    return (
        <Card>
            <h1 className='text-white font-bold text-2xl m-5 justify-self-center-safe'>Add your To-Dos Here!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='bg-transparent border border-white p-3 text-white rounded-lg w-full mb-4'
                    type="text"
                    placeholder='Write your to do'
                    value={text}
                    onChange={handleTextChange}
                    required
                />
                {Error && <span className='text-white mb-2'>The task must containt atleast ten(10) characters</span>}
                <Button type="submit">Submit To-Dos</Button>
            </form>
        </Card>
    )
}

export default CreateTo_Do
