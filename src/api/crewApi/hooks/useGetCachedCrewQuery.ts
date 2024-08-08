import { useGetCrewQuery } from "../crewApi";
import { getCrewCache } from "../utils/localStorageUtils";

export const useGetCachedCrewQuery = () => {
  const { data, ...rest } = useGetCrewQuery();

  const cachedData = getCrewCache();
  return { ...rest, data: data || cachedData };
};
