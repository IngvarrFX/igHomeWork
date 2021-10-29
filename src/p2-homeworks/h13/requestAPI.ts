import axios, {AxiosResponse} from "axios";


// const instance = axios.create({
//     baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
// });


export const requestAPI = {
    // changeCheckBox(value: boolean){
    //     return instance.post({value})
    // }
    // chagneCheck(value: boolean){
    //     return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", body: {success: value})
    // }
    changeCheck(value: boolean){
        const body= {
            success: value
        }
        return axios.post(
            "https://neko-cafe-back.herokuapp.com/auth/test",
            body,
        )
    }

}