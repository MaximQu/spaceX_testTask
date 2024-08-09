import { useGetCachedDragonsByIdQuery } from "@/api/dragonsApi/hooks/useGetCachedDragonsQuery";
import { DetailedInfo, Gallery, Loader } from "@/components";
import { useParams } from "react-router-dom";

const Dragon = () => {
  const { id: idParam } = useParams();

  const { data, isLoading } = useGetCachedDragonsByIdQuery(
    idParam || "",
    !idParam,
  );
  if (!idParam) return null;
  if (!data) return null;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <DetailedInfo data={data} />
      <Gallery />
    </>
  );
};

export default Dragon;
