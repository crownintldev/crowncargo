import { Collection } from "@/types/collection";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa6";

const SingleCollectionPoint = ({ feature }: { feature: Collection }) => {
  const { title, paragraph, tel1} = feature;
  return (
    <div className="w-full p-3 shadow-md">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <h3 className="mb-5 text-lg font-bold text-black dark:text-white sm:text-lg lg:text-lg xl:text-xl">
          {title}
        </h3>
        <div className="mb-5 pr-[10px] text-base font-medium leading-relaxed text-body-color">
          <div className="flex">
          <div className="mb-3  ">
            <FaAddressCard className="mr-3" size={25} />
          </div>    
            {paragraph}
          </div>
        
        </div>
        <div className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          <div className="mb-3 flex items-center">
            <BsFillTelephoneFill className="mr-3" />
            {tel1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollectionPoint;
