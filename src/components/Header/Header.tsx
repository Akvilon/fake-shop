import React from 'react'
import {Box, Flex} from '@chakra-ui/react'
import {Logo} from "./Logo";

export const Header: React.FC = () => {
    return (
        <Box bg='#319795' w='100%' padding='8px 40px' color='white' borderBottom="1px solid #333">
            <Flex justifyContent="space-between">
                <Box>
                    <Logo />
                </Box>
                <Box display="flex" alignItems="center">
                    Profile
                </Box>
            </Flex>
        </Box>
    )
}