import React, {useState} from "react";
import {Request} from "./Request";
import {requestAPI} from "./requestAPI";





export const HW13 = () => {
    const [result, setResult] = useState<string | boolean | unknown>('')
    const requestFn = async (value: boolean) => {
        try {
            const res = await requestAPI.changeCheck(value)
            setResult(res.data.yourBody.success)
        }
            // catch(error) {
            //     // @ts-ignore
            //     setResult(error.message)
            // }
        catch (error:any) {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setResult(error.message)

        }
    }

    return(
        <div>
            <Request callBack={requestFn}/>
            {JSON.stringify(result)}
        </div>
    )
}