import { Main } from './Main';

export const mainRoute = (path: string) => ({
  path,
  loader: () => {
    return null;
  },
  element: <Main />
});