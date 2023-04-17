import jwtDecode from "jwt-decode"

export const isExpired = (exp) => {
    const expired = exp * 1000
    const timeout = expired - Date.now()

    if (timeout < 0) {
        return true
    }

    return false
}

export const verifyToken = (token = '') => {
    const { exp } = jwtDecode(token)
    const status  = isExpired(exp)
    return !status
}

