import { FC } from "react";
import data from "../../public/data.json";
import NumberCounter from "./NumberCounter";
type Props = {
  title: string;
  bg: string;
  image: string;
  timeInterval: TimeInterval;
};

type TimeInterval = "daily" | "weekly" | "monthly";

const Activity: FC<Props> = ({ title, bg, image, timeInterval }) => {
  //console.log(bg);
  const foundIndex = data.findIndex((ele) => ele.title == title);
  const timeInterval2: TimeInterval = timeInterval;
  const currentValue = data[foundIndex]?.timeframes?.[timeInterval2];

  return (
    <div
      className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-${image}.svg)] bg-${bg} bg-no-repeat flex items-end sm:h-[244px]`}
      style={{
        backgroundPositionX: "93%",
        backgroundPositionY: `${title === "Exercise" ? "-5%" : "-10%"}`,
      }}
    >
      <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] ">
        <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
          <h2 className="text-lg text-white font-normal">{title}</h2>
          <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
        </div>
        <div className="w-[85%] h-[30px] flex justify-between items-center m-auto">
          <h2 className="text-[32px]">
            <NumberCounter endValue={currentValue?.current} />
            hrs
          </h2>

          <h3 className="text-[15px] text-[#BDC1FF]">
            {timeInterval == "daily"
              ? "Last Day - "
              : timeInterval == "weekly"
              ? "Last Week - "
              : timeInterval == "monthly"
              ? "Last Month - "
              : ""}
            <NumberCounter endValue={currentValue?.previous} />
            hrs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Activity;
