import React from 'react'
import ClgImg from '../../../assets/image2.jpg'
import './Home.css'

function Home({ studentList }) {
    return (
        <div className='form-container'>
            <img src={ClgImg} />
            <h2>Students Details</h2>
            <div className='list-container'>
                {studentList.map((student, index) =>
                    <div key={index} className='card-container'>
                        <h4>{student.name}</h4>
                        <label>{student.rollNo}</label>
                        <p>{student.branch}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home