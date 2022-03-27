import CardImage from "../subcomponents/Card/CardImage";
import CardTitle from "../subcomponents/Card/CardTitle";
import MainSummaryBody from "../subcomponents/Card/MainSummaryBody";
import ProfileBottomWidget from "../subcomponents/Card/ProfileBottomWidget";

const Card = () => {
  /* 617 x 865px */
  // w-full
  //   447 h-524

  return (
    <div className="relative mx-auto  w-[336px] h-[447px] ">
      <a
        href="#"
        className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
      >
        <div className="shadow p-4 rounded-lg bg-white dark:bg-[#ecf0f1]">
          <CardImage />

          <CardTitle />

          <MainSummaryBody />

          <ProfileBottomWidget />
        </div>
      </a>
    </div>
  );
};

export default Card;
