import React, { useEffect } from 'react'
import { NavbarLayout } from '../components/NavbarLayout'
import { SearchMenu } from '../components/SearchMenu'
import { useDispatch } from 'react-redux'
import { startAddUsersInList } from '../redux/listUsers.slice'

export const SearchUsersPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startAddUsersInList(1, "follow"))
    }, [])
    
    return (
        <NavbarLayout>
            <SearchMenu />
        </NavbarLayout>
    )
}
