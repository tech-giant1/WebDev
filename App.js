import { useState } from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import ROUTES from './Constants/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddStudent from './Components/Pages/AddStudent/AddStudent';
import Home from './Components/Pages/HomePage/Home';
import './App.css';
import About from './Components/Pages/About/About';

function App() {
  const [studentList, setStudentList] = useState([])

  const addStudent = (student) => {
    setStudentList([...studentList, student])
  }

  return (
    <BrowserRouter>
      <NavigationBar>
        <Routes>
          <Route path={ROUTES.home} element={<Home studentList={studentList} />} />
          <Route path={ROUTES.addStudent} element={<AddStudent addStudent={addStudent} />} />
          <Route path={ROUTES.about} element={<About/>} />
        </Routes>
      </NavigationBar>
    </BrowserRouter>
  );
}

export default App;
