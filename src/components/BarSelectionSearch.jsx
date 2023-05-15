import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openFollow, openNew } from '../redux/ui.slice'
import { startAddUsersInList } from '../redux/listUsers.slice'

export const BarSelectionSearch = () => {

    const dispatch = useDispatch()

    const {follow} = useSelector( state => state.ui)

    const handleFollowMenu = ()=>{
        dispatch(openFollow())
    }

    const handleNewMenu = ()=>{
        dispatch(openNew())
        dispatch(startAddUsersInList(1,"new"))
    }

  return (
    <div className='Container-SelectionSearch'>
        <div className={`follow-search ${follow ? "active" : "not-active"}`} onClick={handleFollowMenu}>
            <p>Follow</p>
        </div>
        <div className={`new-search ${ !follow ? "active" : "not-active"}`}onClick={handleNewMenu} >
        <p>New</p>
        </div>
    </div>
  )
}
