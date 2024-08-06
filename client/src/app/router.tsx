import { Route, Routes, useLocation } from "react-router-dom";

import { selectIsAuth, selectUser } from "src/entites/user/model";
import { ProtectedRoute } from "src/entites/user";

import { Device } from "src/pages/device";
import { Basket } from "src/pages/basket";
import { Admin } from "src/pages/admin";
import { Catalog } from "src/pages/catalog";
import { ErrorPage } from "src/pages/error";
import { Login } from "src/pages/login";
import { Main } from "src/pages/main";
import { Registration } from "src/pages/registration";

import { useAppSelector } from "src/shared/lib";
import { PrivateLayout, PublicLayout } from "./layout";

export const Router = () => {

  const location = useLocation();
  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectUser);

  const isAdmin = user?.role === 'ADMIN';

  return (
    <>
      <Routes location={location}>
        <Route element={<PrivateLayout width="max-w-screen-lg"/>}>
          <Route 
            path='/'
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Main />
              </ProtectedRoute> 
            }
          />
          <Route 
            path='/basket'
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Basket />
              </ProtectedRoute> 
            }
          />
          <Route 
            path='/devices'
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Catalog />
              </ProtectedRoute> 
            }
          />
          <Route 
            path='/devices/:id'
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Device />
              </ProtectedRoute> 
            }
          />
          {isAuth && isAdmin &&
            <Route 
              path='/admin' 
              element={<Admin />} 
            />
          }
        </Route>
        <Route element={<PublicLayout width="max-w-screen-sm"/>}>        
          <Route
            path='/login'
            element={
            <ProtectedRoute isAuth={!isAuth} redirectTo="/">
              <Login />
            </ProtectedRoute> 
            }
          />
          <Route
            path='/register'
            element={
            <ProtectedRoute isAuth={!isAuth} redirectTo="/">
              <Registration />
            </ProtectedRoute> 
            }
          />
          </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}