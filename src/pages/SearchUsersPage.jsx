import React, { useEffect } from 'react'
import { NavbarLayout } from '../components/NavbarLayout'
import { SearchMenu } from '../components/SearchMenu'
import { useDispatch } from 'react-redux'
import { startAddUsersInList } from '../redux/listUsers.slice'
import { openFollow } from '../redux/ui.slice'

export const SearchUsersPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(openFollow())
        dispatch(startAddUsersInList(1, "follow"))
    }, [])
    
    return (
        <NavbarLayout>
            <SearchMenu />
        </NavbarLayout>
    )
}
