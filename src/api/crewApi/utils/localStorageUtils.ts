import { CrewMember } from "@/types/CrewMember";

const CREW_DATA_LOCAL_STORAGE_KEY = "CREW_DATA_CACHE";

export const getCrewCache = (): CrewMember[] => {
  return Object.values(
    JSON.parse(
      localStorage.getItem(CREW_DATA_LOCAL_STORAGE_KEY) || JSON.stringify({}),
    ),
  );
};

export const setCrewCache = (data: CrewMember[]) => {
  localStorage.setItem(
    CREW_DATA_LOCAL_STORAGE_KEY,
    JSON.stringify(
      data.reduce(
        (acc, curr) =>
          curr.id != null ? Object.assign(acc, { [curr.id]: curr }) : acc,
        {},
      ),
    ),
  );
};
