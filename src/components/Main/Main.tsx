import React from 'react'
import {Box} from "@chakra-ui/react";
import {Sidebar} from "./Sidebar";
import {Content} from "./Content";

export const Main: React.FC = () => {
    return (
        <Box display="flex" flexGrow="1" background="#e5eaef">
            <Sidebar />
            <Content />
        </Box>
    )
}