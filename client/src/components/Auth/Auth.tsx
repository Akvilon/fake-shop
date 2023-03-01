import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Logo } from '../Header/Logo'
import { Login } from './Login'
import { Register } from './Register'

export const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)

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
                { isLogin
                    ? <Login onRegisterClick={() => setIsLogin(false)}/>
                    : <Register onLoginClick={() => setIsLogin(true)}/>
                }
            </Box>
        </Box>
    )

}