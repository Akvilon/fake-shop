import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {Makeup} from "./Makeup";
import {ToolsAndBrushes} from "./ToolsAndBrushes";
import {Skincare} from "./Skincare";
import {Men} from "./Men";
import {Gifts} from "./Gifts";

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
                    <Box padding="0 40px"><Link to="/">Makeup</Link></Box>
                    <Box padding="0 40px"><Link to="/skincare">Skincare</Link></Box>
                    <Box padding="0 40px"><Link to="/tools">Tools & Brushes</Link></Box>
                    <Box padding="0 40px"><Link to="/gifts">Gifts</Link></Box>
                    <Box padding="0 40px"><Link to="/men">Men</Link></Box>
                </Box>
            </Box>

            <Box flexGrow="1">
                <Routes>
                    <Route path='/' element={<Makeup />}/>
                    <Route path='/skincare' element={<Skincare />}/>
                    <Route path='/tools' element={<ToolsAndBrushes />}/>
                    <Route path='/gifts' element={<Gifts />}/>
                    <Route path='/men' element={<Men />}/>
                </Routes>
            </Box>
        </Box>
    )
}