import React from 'react'
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

type LoginProps = {
    onRegisterClick: () => void
}

export const Login: React.FC<LoginProps> = ({onRegisterClick}) => {

    return (
        <Box padding="30px 40px 40px 40px">
            <FormControl marginTop="10px">
                <FormLabel>User Name</FormLabel>
                <Input type='input' background="#fff"/>
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
                    onClick={() => onRegisterClick()}
                    _hover={{ bg: 'none', color: '#319795' }}
                    marginLeft="16px"
                >
                    Register
                </Button>
            </Box>
        </Box>
    )
}