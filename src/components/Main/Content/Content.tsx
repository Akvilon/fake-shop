import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {ContentRouteType, contentRouts, links, LinkType} from "./ContentRoutes";
import { v4 as uuidv4 } from 'uuid';
import {ProductsList} from "./ProductsList";
import {useAppSelector} from "../../../redux/hooks";

export const Content: React.FC = () => {
    const categoriesList = useAppSelector(state => state.products.categoriesList)
    return (
        <Box display="flex" flexDirection="column" flexGrow="1">
            <Box>
                <Box
                    display="flex"
                    padding="12px 40px"
                    background="#fff"
                    boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)"
                >
                    {
                        links.map((link: LinkType) => <Box key={uuidv4()} padding="0 40px"><Link to={link.to}>{link.name}</Link></Box>)
                    }
                </Box>
            </Box>

            <Box flexGrow="1">
                <Routes>
                    {
                        contentRouts.map(( route: ContentRouteType ) =>
                            <Route key={uuidv4()}
                                   path={route.path}
                                   element={<ProductsList id={route.id} name={route.name} categoriesList={categoriesList}/>}
                            />)
                    }
                </Routes>
            </Box>
        </Box>
    )
}