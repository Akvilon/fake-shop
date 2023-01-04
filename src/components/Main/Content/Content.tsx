import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {Smartphones} from "./Smartphones";

export const Content: React.FC = () => {
    return (
        <Box display="flex" flexDirection="column" flexGrow="1">
            <Box>
                <Box
                    display="flex"
                    padding="12px 40px"
                    background="#fff"
                    boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)"
                >
                    <Box padding="0 40px"><Link to="/">One</Link></Box>
                    <Box padding="0 40px"><Link to="/two">Two</Link></Box>
                    <Box padding="0 40px"><Link to="/three">Three</Link></Box>
                </Box>
            </Box>

            <Box flexGrow="1">
                <Routes>
                    <Route path='/' element={<Smartphones />}/>
                    <Route path='/two' element={<h1>Two</h1>}/>
                    <Route path='/three' element={<h1>Three</h1>}/>
                </Routes>
            </Box>
        </Box>
    )
}