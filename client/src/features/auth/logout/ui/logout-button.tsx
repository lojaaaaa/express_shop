import { useNavigate } from 'react-router-dom';
import { setLoggedOut } from 'src/entites/user/model/slice';
import { removeTokenLocalstorage, useAppDispatch } from 'src/shared/lib';

export const LogoutButton = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoggedOut = () => {
    dispatch(setLoggedOut());
    removeTokenLocalstorage();
    navigate('/login');
  };

  return (
    <button onClick={handleLoggedOut}>
      Выйти из аккаунта
    </button>
  )
}
