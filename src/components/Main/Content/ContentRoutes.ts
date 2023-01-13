import {ReactElement} from "react";
import {CATEGORY_PATH, PRODUCTS_CATEGORY_ID, PRODUCTS_CATEGORY_NAME} from "../../../constants";

export type LinkType = {
    to: string,
    name: string
}

export type ContentRouteType = {
    path: string,
    id: string
    name: string
}

export const links = [
    {
        to: CATEGORY_PATH.MAKEUP,
        name: PRODUCTS_CATEGORY_NAME.MAKEUP
    },
    {
        to: CATEGORY_PATH.SKINCARE,
        name: PRODUCTS_CATEGORY_NAME.SKINCARE
    },
    {
        to: CATEGORY_PATH.TOOLS_AND_BRUSHES,
        name: PRODUCTS_CATEGORY_NAME.TOOLS_AND_BRUSHES
    },
    {
        to: CATEGORY_PATH.GIFTS,
        name: PRODUCTS_CATEGORY_NAME.GIFTS
    },
    {
        to: CATEGORY_PATH.MEN,
        name: PRODUCTS_CATEGORY_NAME.MEN
    },
]

export const contentRouts = [
    {
        path: CATEGORY_PATH.MAKEUP,
        id: PRODUCTS_CATEGORY_ID.MAKEUP,
        name: PRODUCTS_CATEGORY_NAME.MAKEUP
    },
    {
        path: CATEGORY_PATH.SKINCARE,
        id: PRODUCTS_CATEGORY_ID.SKINCARE,
        name: PRODUCTS_CATEGORY_NAME.SKINCARE
    },
    {
        path: CATEGORY_PATH.TOOLS_AND_BRUSHES,
        id: PRODUCTS_CATEGORY_ID.TOOLS_AND_BRUSHES,
        name: PRODUCTS_CATEGORY_NAME.TOOLS_AND_BRUSHES
    },
    {
        path: CATEGORY_PATH.GIFTS,
        id: PRODUCTS_CATEGORY_ID.GIFTS,
        name: PRODUCTS_CATEGORY_NAME.GIFTS
    },
    {
        path: CATEGORY_PATH.MEN,
        id: PRODUCTS_CATEGORY_ID.MEN,
        name: PRODUCTS_CATEGORY_NAME.MEN
    }
]