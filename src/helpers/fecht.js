
const baseUrl = ""

export const fetchWithoToken = async (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`

    if (method === "GET") {
        const resp = await fetch(url)
        return await resp.json()
    } else {
        const resp = await fetch(url, {
            method: method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return await resp.json()
    }

}

export const fetchToken = async (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`
    const token = {}

    if (method === "GET") {
        const resp = await fetch(url, {
            headers: {
                "x-token": token
            }
        })
        return await resp.json()
    } else {
        const resp = await fetch(url, {
            method: method,
            headers: {
                "Content-type": "application/json",
                "x-token": token
            },
            body: JSON.stringify(data)
        })

        return await resp.json()
    }

}