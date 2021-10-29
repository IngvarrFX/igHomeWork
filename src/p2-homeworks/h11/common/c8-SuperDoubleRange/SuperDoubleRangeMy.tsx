import React, {ChangeEvent} from "react"
import style from "./SuperDoubleRange.module.css"
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    numbers:[number,number]
    // min, max, step, disable, ...
}

export const SuperDoubleRangeMy: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, numbers, ...restProps
    }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        debugger
        onChangeRange && onChangeRange(newValue)
    };

    return (
        <Box sx={{width: 150}} className={style.doubleSliderBlock}>
            <Slider
                value={numbers}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    );
}
