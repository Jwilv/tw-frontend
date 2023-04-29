import React from 'react'
import { useSelector } from 'react-redux'

export const PostNote = () => {

  const {name} = useSelector(state => state.user)
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
        <input type="text" placeholder='queee soo ?' />
        <button>Enviar</button>
      </div>
    </div>
  )
}
