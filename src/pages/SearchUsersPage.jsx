import React, { useEffect, useMemo } from 'react'
import { NavbarLayout } from '../components/NavbarLayout'
import { SearchMenu } from '../components/SearchMenu'
import { useDispatch } from 'react-redux'
import { startAddUsersInList } from '../redux/listUsers.slice'
import { openFollow } from '../redux/ui.slice'
import { useLocation } from 'react-router'
import queryString from 'query-string'

export const SearchUsersPage = () => {

    const dispatch = useDispatch()

    const location = useLocation()

    const { q = '' } = useMemo(() => queryString.parse(location.search), [location.search])

    useEffect(() => {
        dispatch(openFollow())
        dispatch(startAddUsersInList(1, "follow",q))
    }, [])
    
    return (
        <NavbarLayout>
            <SearchMenu />
        </NavbarLayout>
    )
}
