import { Route, Routes, useLocation } from "react-router-dom";
import { selectIsAuth, selectUser } from "src/entites/user/model";
import { ErrorPage } from "src/pages/error";
import { Login } from "src/pages/login";
import { Main } from "src/pages/main";
import { Registration } from "src/pages/registration";
import { Layout } from "./layout";
import { ProtectedRoute } from "src/entites/user";
import { useAppSelector } from "src/shared/lib";
import { Admin } from "src/pages/admin";

export const Router = () => {

  const baseLayout = <Layout width="max-w-screen-xl" />
  const loginLayout = <Layout width="max-w-screen-sm" />;

  const location = useLocation();
  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectUser);

  const isAdmin = user?.role === 'ADMIN';

  return (
    <>
      <Routes location={location}>
        <Route element={baseLayout}>
          <Route 
            path='/'
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Main />
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
        <Route element={loginLayout}>        
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