import React, { useState } from 'react'
import {Box, Flex} from '@chakra-ui/react'
import {Logo} from "./Logo";
import {Link, NavLink} from "react-router-dom";
import {RiAccountCircleLine} from "react-icons/ri";
import {FiShoppingCart} from "react-icons/fi";
import {MdFavorite} from "react-icons/md";
import { GoToLogin } from './GoToLogin'

export const Header: React.FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const isRegister: boolean = false
    return (
        <Box bg='#319795' w='100%' padding='8px 40px' color='white' borderBottom="1px solid #333">
            <Flex justifyContent="space-between">
                <Box>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" minWidth="180px">
                    {
                        isRegister
                            ? <NavLink to='/profile'>
                                <RiAccountCircleLine color="#fff" fill="#fff" size="26px"/>
                              </NavLink>
                            : <Box position="relative">
                                <RiAccountCircleLine
                                    onClick={() => setIsShow(true)}
                                    color="#fff"
                                    fill="#fff"
                                    size="26px"
                                    cursor="pointer"/>
                                {
                                    isShow ? <GoToLogin /> : null
                                }
                              </Box>
                    }
                    <NavLink to='/fav'>
                        <MdFavorite color="#fff" fill="#fff" size="26px"/>
                    </NavLink>
                    <NavLink to='/cart'>
                        <FiShoppingCart color="#fff" fill="#fff" size="26px"/>
                    </NavLink>
                </Box>
            </Flex>
        </Box>
    )
}