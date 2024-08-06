import { selectUser } from "src/entites/user/model";
import { useAppSelector } from "src/shared/lib";

import { LogoutButton } from "src/features/auth/logout";

export const Main = () => {

  const user = useAppSelector(selectUser);
  return (
    <div className="pt-32">
      <h1 className="text-center">Добро пожаловать, { user?.email }</h1>
      <div className="flex justify-center mt-8">
        <LogoutButton />
      </div>
    </div>
  )
}
