import SectionTitle from "../Common/SectionTitle";
import SingleCollectionPoint from "./SingleCollectionPoint";
import collectionpointsData from "./collectionpointsData";

const CollectionPoints = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Collection Points"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {collectionpointsData.map((collectionpoint) => (
              <SingleCollectionPoint key={collectionpoint.id} feature={collectionpoint} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionPoints;
