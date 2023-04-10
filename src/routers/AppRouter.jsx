import { Route, Routes } from "react-router"


export const AppRouter = ()=>{
    return(
        <Routes>
        <Route path="/home" Component={<HomePage />}/>
        <Route path="/login" Component={<LoginPage />} />
        </Routes>
    )
}