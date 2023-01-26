import React, {useEffect, useState} from 'react'
import {Card, CardBody, Text} from "@chakra-ui/react";

export type NotificationProps = {
    online: boolean
    isShow: boolean
}

export const Notification: React.FC<NotificationProps> = ({ online , isShow}) => {

    const [showNotification, setShowNotification] = useState<boolean>(isShow)

    useEffect(() => {
        if(!isShow) return

        setShowNotification(true)

        const timer = setTimeout(() => {
            setShowNotification(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [online, isShow]);

    const renderMessage = () => {
        const message = online ? 'Application is ONLINE' : 'Application is OFFLINE'
        return (
            <Card position="fixed" bottom="0" left="45%">
                <CardBody>
                    <Text>{message}</Text>
                </CardBody>
            </Card>
        )
    }

    return (
        <>
            {
                showNotification ? renderMessage() : null
            }
        </>
    )
}