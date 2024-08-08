import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CrewMember } from "../../types/CrewMember";
import { setCrewCache } from "./utils/localStorageUtils";

export const crewApi = createApi({
  reducerPath: "crewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/crew",
  }),
  endpoints: (builder) => ({
    getCrew: builder.query<CrewMember[], void>({
      query: () => "/",
      // This is my personal wish ¯\_(ツ)_/¯ #RUSSIAISATERRORISSTATE
      transformResponse: (crewResponse: CrewMember[]) =>
        crewResponse.filter(
          (item) => item.agency.toLowerCase() !== "roscosmos",
        ),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        setCrewCache(data);
      },
    }),
  }),
});

export const { useGetCrewQuery } = crewApi;
