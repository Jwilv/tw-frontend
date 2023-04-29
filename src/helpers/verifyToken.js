import jwtDecode from "jwt-decode"

export const verifyToken = () => {
    const token = localStorage.getItem("token")
    const userdata = jwtDecode(token)
    console.log(userdata);
}

