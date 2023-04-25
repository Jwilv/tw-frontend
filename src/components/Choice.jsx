import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu, openSuggestions } from '../redux/ui.slice';

export const Choice = () => {
  const dispatch = useDispatch();

  const { suggestions, home}  = useSelector( state => state.ui)

  const handleHome = () => {
    dispatch(openMenu());
  }

  const handleSuggestions = () => {
    dispatch(openSuggestions())
  }

  return (
    <div className='choice-container'>
      <div
        className="choice-home"
        onClick={handleHome}
      >
        <p className={home ? "active" : "not-active"}>home</p>
      </div>
      <div
        className="choice-suggestions"
        onClick={handleSuggestions}
      >
        <p className={suggestions ? "active" : "not-active"}>Suggestions</p>
      </div>
    </div>
  )

}
