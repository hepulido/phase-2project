import {React, useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './screens/Home.js';
import Article from './screens/Article.js';
import Form from './screens/Form.js';
import Contact from './screens/Contact.js';

function App() {
  const [images , setImage]= useState ([])
   useEffect(() => {
      fetch( "http://localhost:3001/article")
      .then((resp) => resp.json())
      .then((arrOfImage) => {
        console.log(arrOfImage)
        setImage([...arrOfImage])
    })
    },[])
  
    return (
    <>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Article' element={<Article images={images}/>}  />
        <Route path='/Form' element={<Form />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
