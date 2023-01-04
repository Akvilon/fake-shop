import React, {useEffect} from "react";
import {ApiService} from "../../../../services";


export const Smartphones: React.FC = () => {

    useEffect(() => {
        ApiService.getProductsByCategory().then(prods => console.log(prods))
    }, [])
    return (
        <>One</>
    )
}