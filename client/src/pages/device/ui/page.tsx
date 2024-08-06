import { useParams } from "react-router-dom";
import { useGetDeviceInfoQuery } from "src/entites/devices/api/api";
import { selectDeviceInfo } from "src/entites/devices/model/selectors";
import { useAppSelector } from "src/shared/lib";
import { Loader } from "src/shared/ui";


export const Device = () => {

  const { id } = useParams();

  const { isLoading } = useGetDeviceInfoQuery(Number(id));

  const device = useAppSelector(selectDeviceInfo);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="pt-24">
      <h1 className="mb-8">
        Информация о товаре:
      </h1>
      {device && (
        <div className="flex gap-4">
          <img className="max-w-96" src={`http://localhost:5000/${device.img}`} alt={device.name} />
          <div className="flex flex-col gap-2 p-4">
            <h2 className="font-semibold text-xl">{device.name}</h2>
            <p className="self-end">{device.price} руб.</p>
          </div>
        </div>
      )}
    </div>
  )
}