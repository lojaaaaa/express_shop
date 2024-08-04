import { Registration } from './Registration';

export const registrationRoute = (path: string) => ({
  path,
  loader: () => {
    return null;
  },
  element: <Registration />
});