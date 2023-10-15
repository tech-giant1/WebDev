import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddStudent.css'

function AddStudent({ addStudent }) {
    const [name, setName] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [branch, setBranch] = useState('')

    const navigate = useNavigate()

    const handleSubmit = () => {
        addStudent({ name, rollNo, branch })
        handleCancel()
        navigate('/')
    }

    const handleCancel = () => {
        setName('')
        setRollNo('')
        setBranch('')
    }

  return (
    <div className='form-container'>
        <h3>Add Student Details</h3>
        <div className='form-item'>
            <label>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form-item'>
            <label>Roll No</label>
            <input type='number' value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        </div>
        <div className='form-item'>
            <label>Branch</label>
            <input type='text' value={branch} onChange={(e) => setBranch(e.target.value)} />
        </div>
        <div className='form-btns'>
            <button onClick={handleSubmit} >Submit</button>
            <button onClick={handleCancel} >Cancel</button>
        </div>
    </div>
  )
}

export default AddStudent