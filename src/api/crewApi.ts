import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CrewMember } from "../types/CrewMember";

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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(
          crewApi.util.upsertQueryData(
            "getCrew",
            undefined,
            Object.values(
              JSON.parse(
                localStorage.getItem("CREW_DATA_CACHE") ||
                  JSON.stringify({}),
              ),
            ),
          ),
        );
        const { data } = await queryFulfilled;
        localStorage.setItem(
          "CREW_DATA_CACHE",
          JSON.stringify(
            data.reduce(
              (acc, curr) =>
                curr.id != null ? Object.assign(acc, { [curr.id]: curr }) : acc,
              {},
            ),
          ),
        );
      },
    }),
  }),
});

export const { useGetCrewQuery } = crewApi;
