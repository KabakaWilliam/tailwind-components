import FeaturedTag from "./featuredTag";
import SummaryTopWidget from "./SummaryTopWidget";

const CardImage = () => {
  return (
    <div className="flex justify-center relative rounded-lg overflow-hidden h-52 ">
      <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <SummaryTopWidget />

      <FeaturedTag />
    </div>
  );
};

export default CardImage;
