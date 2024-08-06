import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import { Dropdown } from 'antd';
import { useAppSelector } from "src/shared/lib";
import { selectUser } from "src/entites/user/model";
import { LogoutButton } from "src/features/auth/logout";

export const Header = () => {

  const user = useAppSelector(selectUser);
  const isAdmin = user?.role === 'ADMIN';

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <LogoutButton />
    },
  ];
  
  return (
    <header className="bg-slate-800">
      <div className="max-w-screen-lg mx-auto py-2 px-8">
        <div className="flex justify-between items-center">
          <ul className="h-20 flex gap-8 items-center">
            <li>
              <NavLink className="text-white" to="/">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white" to="/devices">
                Каталог товаров
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white" to="/basket">
                Корзина
              </NavLink>
            </li>
            { isAdmin &&
              <li>
                <NavLink className="text-white" to="/admin">
                  Админка
                </NavLink>
              </li>
            }
          </ul>
          <Dropdown menu={{ items }}>
            <p className="text-white">
              { user?.email }
            </p>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}
