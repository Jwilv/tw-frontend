import jwtDecode from "jwt-decode"

export const getUidAndName = () => {
    const token = localStorage.getItem("token")
    const {_id,name} = jwtDecode(token)
    return {_id,name}
}

