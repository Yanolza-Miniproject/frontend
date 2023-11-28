import { useLocation } from "react-router-dom";

const useGetValidParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const getNumberParam = (param: string, defaultValue: number) => {
    const value = searchParams.get(param);
    return value !== null ? Number(value) : defaultValue;
  };

  const validParams = {
    region: getNumberParam("region", 99),
    type: getNumberParam("type", 99),
    category_cooking: getNumberParam("categoryCooking", 2),
    category_parking: getNumberParam("categoryParking", 2),
    category_pickup: getNumberParam("categoryPickup", 2),
  };

  return validParams;
};

export default useGetValidParams;
