import React, {ChangeEvent} from "react"
import style from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    debugger
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([+e.currentTarget.value, value[1]])
    }



    return (
        <div className={style.doubleSliderBlock}>
            <input type="range" value={value ? value[0] : 0}
                   onChange={onChangeCallback}
                   min={0} max={100}
            />
            <input type="range" value={value ? value[1] : 100}
                   onChange={onChangeCallback}
                   min={0} max={100}
            />
        </div>
    )
}

export default SuperDoubleRange
