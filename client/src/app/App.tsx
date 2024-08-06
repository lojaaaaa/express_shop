
import { useAuthCheckQuery } from 'src/entites/user';
import { Router } from './router';

export const App = () => {
  const { isLoading }  = useAuthCheckQuery();

  if (isLoading) {
    return <div>...</div>
  }

  return <Router />
}

