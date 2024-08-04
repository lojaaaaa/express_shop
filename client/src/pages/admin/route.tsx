import { Admin } from './Admin';

export const adminRoute = (path: string) => ({
  path,
  loader: () => {
    return null;
  },
  element: <Admin />
});