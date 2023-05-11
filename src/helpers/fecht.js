
// const baseUrl = import.meta.env.VITE_APP_URL_API
const baseUrl = "http://localhost:8080"


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
    const token = localStorage.getItem('token')

    if (method === "GET") {
        const resp = await fetch(url, {
            headers: {
                "x-token": token
            }
        })
        return await resp.json()
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                "x-token": token
            },
            body: JSON.stringify(data)
        })

        return await resp.json()
    }

}

//en name va el nombre avatar o banner
export const fetchTokenUploadFile = async (endpoint, data, name) => {
    const url = `${baseUrl}/${endpoint}`
    const token = localStorage.getItem('token')

    const formData = new FormData();
    formData.append(name, data);

    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            "x-token": token
        },
        body: formData
    })
        .then(() => { return true})
        .catch((err) => {
            console.log(err)
            return false
        })
}