import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openFollow, openNew } from '../redux/ui.slice'
import { startAddUsersInList } from '../redux/listUsers.slice'
import { useLocation } from 'react-router'
import queryString from 'query-string'

export const BarSelectionSearch = () => {

    const dispatch = useDispatch()

    const { follow } = useSelector(state => state.ui)

    const location = useLocation()

    const { q = '' } = useMemo(() => queryString.parse(location.search), [location.search])

    const handleFollowMenu = () => {
        dispatch(openFollow())
        dispatch(startAddUsersInList(1, "follow",q))
    }

    const handleNewMenu = () => {
        dispatch(openNew())
        dispatch(startAddUsersInList(1, "new",q))
    }

    return (
        <div className='Container-SelectionSearch'>
            <div className={`follow-search ${follow ? "active" : "not-active"}`} onClick={handleFollowMenu}>
                <p>Follow</p>
            </div>
            <div className={`new-search ${!follow ? "active" : "not-active"}`} onClick={handleNewMenu} >
                <p>New</p>
            </div>
        </div>
    )
}
