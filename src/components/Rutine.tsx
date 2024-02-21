import { FC } from "react";
import NumberCounter from "./NumberCounter";
import data from "../../public/data.json";

type Props = {
  timeInterval: string;
  image: string;
  title: string;
  index: number;
  background: string;
};

type Timeframe = {
  current: number;
  previous: number;
};

type Activity = {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
    [key: string]: Timeframe;
  };
};

const Rutine: FC<Props> = ({
  timeInterval,
  image,
  title,
  index,
  background,
}) => {
  const activity: Activity | undefined = data[index];

  return (
    <div
      className={`row-span-1 h-[160px] rounded-[1rem] bg-[url(../images/icon-${image}.svg)] bg-${background} bg-no-repeat flex items-end sm:h-[244px]`}
      style={{
        backgroundPositionX: "93%",
        backgroundPositionY: `${title == "exercise" ? "-2%" : "-5%"}`,
      }}
    >
      <div className="bg-DarkBlue h-[120px] w-full rounded-[1rem] flex flex-col items-center py-6 sm:h-[204px] sm:px-6 hover:bg-HoverCard cursor-pointer transition-all duration-500">
        <div className="w-[85%] h-[30px] flex justify-between items-center m-auto sm:h-[20px] sm:m-0 sm:mb-6">
          <h2 className="text-lg text-white font-normal">{title}</h2>
          <img src="../images/icon-ellipsis.svg" alt="ellipsis" />
        </div>
        <div className="w-[85%] h-[30px] flex justify-between items-center m-auto sm:flex-col sm:m-0 sm:items-start">
          <h2 className="text-[32px] sm:text-[54px] sm:font-light">
            <NumberCounter
              endValue={activity.timeframes?.[timeInterval].current}
            />
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
            <NumberCounter
              endValue={activity.timeframes?.[timeInterval].previous}
            />
            hrs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Rutine;
