import React from 'react';
import {NotificationWrap} from "./NotificationWrap";
import {Route, Routes} from "react-router-dom";
import { AuthPage, CartPage, FavoritePage, HomePage, ProfilePage } from '../pages'


function App() {

  return (
      <>
          <Routes>x
              <Route path={'*'} element={<HomePage />}/>
              <Route path={'/profile'} element={<ProfilePage />}/>
              <Route path={'/auth'} element={<AuthPage />}/>
              <Route path={'/fav'} element={<FavoritePage />}/>
              <Route path={'/cart'} element={<CartPage />}/>
          </Routes>
          <NotificationWrap />
      </>

  );
}

export default App;
