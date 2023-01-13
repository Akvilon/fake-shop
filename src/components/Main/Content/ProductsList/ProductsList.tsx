import React, {useEffect} from 'react'
import {Category} from "../../../../redux/features/products/types";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {fetchProductsByCategory} from "../../../../redux/features/products/productsSlice";
import {ProductItem} from "./ProductItem";
import { v4 as uuidv4 } from 'uuid';
import {Flex, Spinner} from "@chakra-ui/react";

type ProductsListPropsType = {
    id: string,
    name: string,
    categoriesList: Array<Category>
}

export const ProductsList: React.FC<ProductsListPropsType> = ({id, name, categoriesList}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProductsByCategory(id))
    }, [id])

    if(!categoriesList) return <Spinner size="xl"/>

    return (
        <Flex wrap="wrap">
            {
                categoriesList
                    //@ts-ignore
                    ? categoriesList
                        .find(category => category.displayName === name).products
                        .map(product => <ProductItem key={uuidv4()} displayName={product.displayName} image250={product.image250}/>)
                    : null
            }
        </Flex>
    )
}