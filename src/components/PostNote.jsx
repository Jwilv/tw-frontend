import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2'
import { startPostNote, startUploadUserNotes } from '../redux/notes.slice'

export const PostNote = () => {

  const dispatch = useDispatch()

  const { _id } = useSelector(state => state.user)

  const [value, changevalue, reset] = useForm({ message: "" })

  const [Counter, setCounter] = useState(0)

  const { message } = value;

  const { name } = useSelector(state => state.user)

  const MAX_CHARACTERS = 250;

  useEffect(() => {
    setCounter(MAX_CHARACTERS - message.length)
    console.log(Counter)
  }, [message])

  const handlePostNote = (event) => {
    event.preventDefault()
    if (message.length > 250) {
      return Swal.fire("Error", "se permiten maximo 250 caracteres", "error")
    }
    const payload = {
      message,
      name,
    }

    dispatch(startPostNote(payload))

    setTimeout(() => {
      dispatch(startUploadUserNotes(_id, 1))

    }, 40);
    reset()
  }
  return (
    <div className="post-note-container">
      <div className="post-note-user">
        <img
          src={`http://localhost:8080/getAvatar?id=${_id}`}
          alt="img user"
        />
        <p>{name}</p>
      </div>
      <div className="post-note-input">
        <p>{Counter}</p>

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
