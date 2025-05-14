import { useState } from 'react'
import './CourseCard.css'
import CourseCard from './components/CourseCard'

function App() {
  const [card, setCard] = useState({title: "如何摆烂", content: "这门课将会教你如何成为人群中最不耀眼的那棵草", price:'免费', language:'不用言语', duration:'永远', location: '自己家'})

  return (
    <>
      <CourseCard card={card}/>
    </>
  )
}

export default App
