import { fetchToken } from "./fecht"


export const updateDataProfile = async(data = {})=>{

    try {
        const resp = await fetchToken("changeProfile",data,"PUT")
    } catch (error) {
        console.log(error)
    }

}