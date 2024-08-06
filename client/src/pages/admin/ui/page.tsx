import { useGetUsersQuery } from "src/entites/user/api"
import { selectUsers } from "src/entites/user/model"
import { useAppSelector } from "src/shared/lib"
import { Loader } from "src/shared/ui";

export const Admin = () => {
  const { isLoading } = useGetUsersQuery();
  const users = useAppSelector(selectUsers);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pt-24">
      <h1 className="mb-8">Админ панель</h1>
      <ul className="flex flex-col gap-4">
        {
          users.map(({ email, role }) =>
          <li className="flex justify-between">
            <h3>
              {email}
            </h3>
            <p>
              {role}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}