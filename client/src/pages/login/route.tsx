import { Login } from './Login';

export const loginRoute = (path: string) => ({
  path,
  loader: () => {
    return null
  },
  element: <Login />
});