import React, {useEffect, useState} from 'react'
import {Card, CardBody, Text} from "@chakra-ui/react";

export type NotificationProps = {
    online: boolean
    isShow: boolean
}

export const Notification: React.FC<NotificationProps> = ({ online , isShow}) => {
    const [show, setShow] = useState<boolean>(isShow)

    useEffect(() => {
        setShow(isShow)

        const timer = setTimeout(() => {
            setShow(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [isShow]);

    const renderMessage = () => {
        const message = online ? 'Application is ONLINE' : 'Application is OFFLINE'
        return (
            <Card position="fixed" bottom="0">
                <CardBody>
                    <Text>{message}</Text>
                </CardBody>
            </Card>
        )
    }

    return (
        <>
            {
                show ? renderMessage() : null
            }
        </>
    )
}