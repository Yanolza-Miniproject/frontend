import { CategoryFilterParams } from "../../pages/Category/Category.types";
import { baseInstance, authInstance } from "../../hooks/useAxios";
import { isLoggedIn } from "../../utils/isLogined";

// const validParams = (param: string, value: number | boolean) => {
//   return value === false ? {} : { [param]: String(value) };
// };

export const fetchCatgory = async (
  pageParam: number,
  props: CategoryFilterParams,
) => {
  // const params = {
  //   ...validParams("region01", props.region01),
  //   ...validParams("type", props.type),
  //   ...validParams("categoryParking", props.categoryParking),
  //   ...validParams("categoryCooking", props.categoryCooking),
  //   ...validParams("categoryPickup", props.categoryPickup),
  // };

  type paramsType3 = Record<keyof CategoryFilterParams, string>;

  // const params: Partial<paramsType3> = {};

  // for (const key in props) {
  //   if (props[key as keyof CategoryFilterParams] !== false) {
  //     params[key as keyof paramsType3] = String(
  //       props[key as keyof CategoryFilterParams],
  //     );
  //   }
  // }

  const initialParams: Partial<paramsType3> = {};

  const params: Partial<paramsType3> = Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (value !== false) {
        acc[key as keyof paramsType3] = String(value);
      }
      return acc;
    },
    initialParams,
  );

  const baseUrl = `accommodations?page=${pageParam}`;

  try {
    const data = isLoggedIn()
      ? await authInstance.get(baseUrl, { params })
      : await baseInstance.get(baseUrl, { params });

    return data.data;
  } catch (error) {
    return error;
  }
};

export const postClickHeart = async (accommodationId: string) => {
  const data = await authInstance.post(`wish/${accommodationId}`);
  return data.data;
};

export const deleteClickHeart = async (accommodationId: string) => {
  const data = await authInstance.delete(`wish/${accommodationId}`);
  return data.data;
};
