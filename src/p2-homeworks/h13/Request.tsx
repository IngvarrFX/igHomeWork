import React, {ChangeEvent} from "react";


type PropsType = {
    callBack: (value: boolean) => void
}
export const Request: React.FC<PropsType> = (props) => {
    const onChangeBox = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)
    }
    return (
        <div>
            CheckBox
            <input type="checkbox" onChange={onChangeBox}/>
        </div>
    )
}