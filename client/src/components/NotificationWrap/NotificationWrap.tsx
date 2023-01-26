import React from 'react'
import {Notification} from "./Notification";
import {useOnlineState} from "../../hooks/useOnlineState";

export const NotificationWrap: React.FC = () => {
    const {online, isShow} = useOnlineState()

    return <Notification online={online} isShow={isShow}/>
}