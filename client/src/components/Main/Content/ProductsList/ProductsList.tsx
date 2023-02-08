import React, {useEffect} from 'react'
import { Product } from '../../../../redux/features/products/types'
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {fetchProducts} from "../../../../redux/features/products/productsSlice";
import {ProductItem} from "./ProductItem";
import { v4 as uuidv4 } from 'uuid';
import {Box, Flex, Spinner} from "@chakra-ui/react";

type ProductsListPropsType = {
    products: Array<Product>
}

export const ProductsList: React.FC<ProductsListPropsType> = ({products}) => {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.products.loading)

     useEffect(() => {
         dispatch(fetchProducts())
     }, [])

    if(loading) {
        return <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center"><Spinner size="xl"/></Box>
    }

    return (
        <Flex wrap="wrap">
           Products
        </Flex>
    )
}