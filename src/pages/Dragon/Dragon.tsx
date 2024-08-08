import { useGetCachedDragonsByIdQuery } from "@/api/dragonsApi/hooks/useGetCachedDragonsQuery";
import { DetailedInfo, Gallery } from "@/components";
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
    return <div>Loading...</div>;
  }

  return (
    <>
      <DetailedInfo data={data} />
      <Gallery />
    </>
  );
};

export default Dragon;
