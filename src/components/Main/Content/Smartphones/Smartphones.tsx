import React, {useEffect} from "react";
import {ApiService} from "../../../../services";


export const Smartphones: React.FC = () => {

    useEffect(() => {
        ApiService.getSmartphones().then(smartphones => console.log(smartphones))
    }, [])
    return (
        <></>
    )
}