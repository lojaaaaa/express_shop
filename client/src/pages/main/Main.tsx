import { selectUser } from "src/entites/user/model";
import { removeTokenLocalstorage, useAppDispatch, useAppSelector } from "src/shared/lib";
import { Button } from "antd";
import { setLoggedOut } from "src/entites/user/model/slice";
import { useNavigate } from "react-router-dom";

export const Main = () => {

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoggedOut = () => {
    dispatch(setLoggedOut());
    removeTokenLocalstorage();
    navigate('/login');
  };
  
  return (
    <div className="pt-32">
      <h1 className="text-center">Добро пожаловать, { user?.email }</h1>
      <div className="flex justify-center mt-8">
        <Button size="large" onClick={handleLoggedOut}> 
          Выйти
        </Button>
      </div>
    </div>
  )
}
