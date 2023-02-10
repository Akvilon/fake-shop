import React from 'react'
import { Box, Button, FormControl, Text, FormLabel, Input } from '@chakra-ui/react'
import { Logo } from '../Header/Logo'

export const Auth: React.FC = () => {
    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                boxShadow="0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);"
                borderRadius="4px"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    background="#319795"
                    borderTopLeftRadius="4px"
                    borderTopRightRadius="4px"
                    padding="5px 0"
                >
                    <Logo />
                </Box>
                <Box padding="30px 40px 40px 40px">
                    <FormControl marginTop="10px">
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' background="#fff"/>
                    </FormControl>
                    <FormControl marginTop="16px">
                        <FormLabel>Password</FormLabel>
                        <Input type='password' background="#fff"/>
                    </FormControl>
                    <Button
                        marginTop="30px"
                        width="100%"
                        background="#319795"
                        color="#fff"
                    >
                        Log in
                    </Button>
                    <Box display="flex" alignItems="center" marginTop="16px">
                        <Text fontSize="12px">Didn't register yet?</Text>
                        <Button
                            width="auto"
                            padding="0"
                            background="transparent"
                            color="#319795"
                            _hover={{ bg: 'none', color: '#319795' }}
                            marginLeft="16px"
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}