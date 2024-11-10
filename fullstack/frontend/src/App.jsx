import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() =>{
    axios.get('/api/jokes')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error) =>{
      console.log(error);
      
    })
  }, )

  return (
    <>
      <h1>Fullstack</h1>
      <p>Jokes: {jokes.length}</p>      
      {/* // direct value nahi le sakte isliye length use kiya hai */}

      {
        jokes.map((joke, index) =>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
