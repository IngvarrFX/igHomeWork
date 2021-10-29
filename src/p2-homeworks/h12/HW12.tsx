import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ["dark", "red", "some"];

function HW12() {
    const themeArray = ["dark", "red", "some"]
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback

    const onChangeCallback = (value: string ) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + "-text"]}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themeArray} value={theme} onChangeOption={onChangeCallback}/>
            <div>
                <SuperRadio options={themeArray} value={theme} onChangeOption={onChangeCallback}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
