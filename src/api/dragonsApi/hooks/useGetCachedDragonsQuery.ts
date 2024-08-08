import { Dragon } from "@/types/Dragons";
import { useGetDragonByIdQuery, useGetDragonsQuery } from "../dragonsApi";
import {
  getDragonsByIdCache,
  getDragonsCache,
} from "../utils/localStorageUtils";

export const useGetCachedDragonsQuery = () => {
  const { data, ...rest } = useGetDragonsQuery();

  const cachedData: Dragon[] = getDragonsCache();

  return { ...rest, data: data || cachedData };
};

export const useGetCachedDragonsByIdQuery = (id: string) => {
  const { data, ...rest } = useGetDragonByIdQuery(id);

  const cachedData = getDragonsByIdCache(id);

  return { ...rest, data: data || cachedData };
};
