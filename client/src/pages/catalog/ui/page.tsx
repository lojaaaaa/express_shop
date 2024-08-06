import { Link } from "react-router-dom";
import { useGetDevicesQuery } from "src/entites/devices/api/api"
import { selectDevices } from "src/entites/devices/model/selectors"
import { useAppSelector } from "src/shared/lib"
import { Loader } from "src/shared/ui";

export const Catalog = () => {
  const { isLoading } = useGetDevicesQuery();
  const devices = useAppSelector(selectDevices)

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pt-24">
      <h1 className="mb-8">Каталог</h1>
      <ul className="grid grid-cols-3 gap-8">
        {devices.map(({ id, img, name, price}) => 
          <li key={id} >
            <Link className="flex flex-col gap-2 bg-slate-800" to={`/devices/${id}`}>
              <img className="max-w-96" src={`http://localhost:5000/${img}`} alt={name} />
              <div className="flex flex-col gap-2 p-4">
                <h2 className="font-semibold text-xl">{name}</h2>
                <p className="self-end">{price} руб.</p>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
