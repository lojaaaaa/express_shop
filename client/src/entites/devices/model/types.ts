
export interface IDevice {
  id: number;
  name: string;
  description: string;
  img: string;
  brandId: number;
  price: number;
  rating: number;
  typeId: number
}

export interface DeviceResponse {
  count: number;
  rows: IDevice[];
}