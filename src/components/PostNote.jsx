import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'

export const PostNote = () => {

  const [ value, changevalue, reset] = useForm({message : ""})

  const {message} = value;

  const { name } = useSelector(state => state.user)

  console.log(message)


  const handlePostNote = (event) => {
    event.preventDefault()
  }
  return (
    <div className="post-note-container">
      <div className="post-note-user">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.eAevlGw1UR_UqXA_2y-2tAHaHa&pid=Api&P=0"
          alt="img user"
        />
        <p>{name}</p>
      </div>
      <div className="post-note-input">
        <form onSubmit={handlePostNote} >

          <input 
          type="text" 
          placeholder='que es lo que opinas ?' 
          name='message'
          value={message}
          onChange={changevalue}
          />
          <button type='submit'>Enviar</button>
        </form>

      </div>
    </div>
  )
}
