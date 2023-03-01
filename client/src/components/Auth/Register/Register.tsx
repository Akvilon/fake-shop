import React, { SyntheticEvent, useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useAppDispatch } from '../../../redux/hooks'
import { registerUser } from '../../../redux/features/auth/authSlice'

type RegisterProps = {
    onLoginClick: () => void
}

export const Register: React.FC<RegisterProps> = ({onLoginClick}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()

    const onFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(registerUser({username, password}))
        setUsername('')
        setPassword('')
    }

    return (
        <Box padding="30px 40px 40px 40px">
            <form onSubmit={onFormSubmit}>
                <FormControl marginTop="10px">
                    <FormLabel>User Name</FormLabel>
                    <Input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        type='input'
                        background="#fff"/>
                </FormControl>
                <FormControl marginTop="16px">
                    <FormLabel>Password</FormLabel>
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                        background="#fff"/>
                </FormControl>
                <Button
                    type="submit"
                    marginTop="30px"
                    width="100%"
                    background="#319795"
                    color="#fff"
                >
                    Register
                </Button>
            </form>
            <Box display="flex" alignItems="center" marginTop="16px">
                <Button
                    width="auto"
                    padding="0"
                    background="transparent"
                    color="#319795"
                    onClick={() => onLoginClick()}
                    _hover={{ bg: 'none', color: '#319795' }}
                    marginLeft="16px"
                >
                    Back to login
                </Button>
            </Box>
        </Box>
    )
}