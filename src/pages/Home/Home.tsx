import { useGetCachedCrewQuery } from "@/api/crewApi/hooks/useGetCachedCrewQuery";
import { useGetCachedDragonsQuery } from "@/api/dragonsApi/hooks/useGetCachedDragonsQuery";
import {
  AboutUs,
  DragonsSlider,
  Gallery,
  Hero,
  Loader,
  Stats,
  Team,
} from "@/components";
import { useMemo } from "react";

const Home = ({}) => {
  const { data, isFetching } = useGetCachedDragonsQuery();
  const { data: crewData, isFetching: isCrewDataFetching } =
    useGetCachedCrewQuery();

  const isDragonsLoading = useMemo(
    () => isFetching && data == null,
    [data, isFetching],
  );

  const isCrewLoading = useMemo(
    () => isCrewDataFetching && crewData == null,
    [crewData, isCrewDataFetching],
  );

  return (
    <>
      <Hero />
      {isDragonsLoading ? <Loader /> : <DragonsSlider dragonList={data} />}
      <Stats />
      <AboutUs />
      {isCrewLoading ? <Loader /> : <Team data={crewData} />}
      <Gallery />
    </>
  );
};

export default Home;
