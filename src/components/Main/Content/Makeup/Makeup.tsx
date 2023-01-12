import React, {useEffect} from "react";
import {ApiService} from "../../../../services";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {fetchProductsByCategory} from "../../../../redux/features/productsSlice";


export const Makeup: React.FC = () => {

    const dispatch = useAppDispatch()
    const list = useAppSelector(state => state.products.productsList)

    useEffect(() => {
        dispatch(fetchProductsByCategory('cat140006'))
    }, [dispatch])

    console.log(list)
    return (
        <>Makeup</>
    )
}