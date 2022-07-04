import {React, useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import ArticleInfo from '../components/ArticleInfo';

export default function Article({images}) {
const [imageCounter, setImageCounter]= useState(0);
const [currentArticle, setCurrentArticle] = useState({img:""})

useEffect(() => {
  setCurrentArticle({...images[imageCounter]})
 } ,[images ,imageCounter])

function handleClick(){
  console.log("CLICKED");
  if(images.length - 1 <= imageCounter){
    setImageCounter(0)
  }else{
   setImageCounter(imageCounter + 1)
  }

}
 
  return (
    <div>
    <Navbar/>
     <ArticleInfo handleClick={handleClick} currentArticle={currentArticle}/>
    </div>
  )
}
