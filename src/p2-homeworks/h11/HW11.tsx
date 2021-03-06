import React, {useState} from "react"
import SuperRange from "./common/c7-SuperRange/SuperRange"
import {SuperDoubleRangeMy} from "./common/c8-SuperDoubleRange/SuperDoubleRangeMy";
import s from './HW11.module.css'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const setValuesRange = (values: any) => {
        setValue1(values[0])
        setValue2(values[1])
    }

    const setValueRange = (values: number | number[]) => {
        setValue1(Number(values))
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s.valueLeft}>{value1}</span>
                <SuperRange onChangeRange={(value) => setValueRange(value)}
                            num={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span className={s.valueLeft}>{value1}</span>
                <SuperDoubleRangeMy
                    onChangeRange={(values) => setValuesRange(values)}
                    numbers={[value1,value2]}
                />
                <span className={s.valueRight}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
