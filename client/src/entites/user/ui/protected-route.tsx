import { Navigate } from 'react-router-dom';
import React from 'react';

interface ProtectedRouteProps extends React.PropsWithChildren {
  isAuth: boolean;
  redirectTo?: string;
}

export const ProtectedRoute = ({ isAuth, redirectTo = '/login', children }: ProtectedRouteProps) => {
  if (!isAuth) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};