import React, {useEffect} from 'react';
import {Header} from "./Header";
import {Main} from "./Main";
import {Box} from "@chakra-ui/react";
import {NotificationWrap} from "./NotificationWrap";
import {ApiService} from "../services";
import {Route, Routes} from "react-router-dom";
import {CartPage, FavoritePage, HomePage} from "../pages";
import {ProfilePage} from "../pages/ProfilePage";

function App() {

    useEffect(() => {
        ApiService.testReq().then(data => console.log(data))
    }, [])

  return (
      <>
          <Routes>
              <Route path={'*'} element={<HomePage />}/>
              <Route path={'/profile'} element={<ProfilePage />}/>
              <Route path={'/fav'} element={<FavoritePage />}/>
              <Route path={'/cart'} element={<CartPage />}/>
          </Routes>
          <NotificationWrap />
      </>

  );
}

export default App;
