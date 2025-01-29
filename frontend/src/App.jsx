import { useState } from 'react'
import { Routes, Route } from "react-router";

import './App.css'
import Home from './pages/Home';
import DeleteBooks from './pages/DeleteBook';
import EditBooks from './pages/EditBook';
import CreateBooks from './pages/CreateBooks';
import ShowBooks from './pages/ShowBook';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books/delete/:id" element={<DeleteBooks />} />
    <Route path="/books/edit/:id" element={<EditBooks />} />
    <Route path="/books/create" element={<CreateBooks />} />
    <Route path="/books/details/:id" element={<ShowBooks />} />
  </Routes>
  )
}

export default App
