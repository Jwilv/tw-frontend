import React, { useEffect, useMemo } from 'react'
import querystring from 'query-string'
import { BarSelectionSearch } from './BarSelectionSearch'
import { SearchsProfiles } from './SearchsProfiles'
import { useLocation, useNavigate } from 'react-router'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startAddUsersInList } from '../redux/listUsers.slice'

export const SearchMenu = () => {

    const location = useLocation()

    const dispatch = useDispatch()

    const { q = '' } = useMemo(() => querystring.parse(location.search), [location.search])

    const [{ searchText }, handleInputChanGet] = useForm({ searchText: q })

    const { follow } = useSelector(state => state.ui)

    const type = follow ?  'follow' : 'new'

    useEffect(() => {
        dispatch(startAddUsersInList(1,type,q))
    }, [follow,q])
    

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText}`)

    }

    return (
        <div className='container-SearchUsers'>
            <div className="container-search-input">

                <div className="input-search">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="search">
                            <input 
                            className="input" 
                            type="text" 
                            required="" 
                            placeholder="Search" 
                            id="search"
                            name='searchText'
                            value={searchText}
                            onChange={handleInputChanGet}
                            />
                            <div className="fancy-bg"></div>
                            <div className="search">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                    </g>
                                </svg>
                            </div>
                        </label>
                    </form>
                </div>
            </div>

            <BarSelectionSearch />
            <SearchsProfiles />
        </div>
    )
}
