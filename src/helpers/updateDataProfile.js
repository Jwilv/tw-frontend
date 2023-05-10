import { fetchToken } from "./fecht"


export const updateDataProfile = async(data = {})=>{

    try {
        const resp = await fetchToken("changeProfile",data,"PUT")
        console.log("salio bien");
    } catch (error) {
        console.log(error)
        console.log('malio sal')
    }

}